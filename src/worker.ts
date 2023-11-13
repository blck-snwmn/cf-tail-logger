export interface Env {
	LOG_BUCKET: R2Bucket;
}

export default {
	async tail(events: TraceItem[], env: Env, ctx: ExecutionContext) {
		if (events.length === 0) {
			return;
		}
		const scriptName = events[0].scriptName;

		let json = "";
		for (const event of events) {
			json += JSON.stringify(event) + "\n";
		}
		// const json = JSON.stringify(events);
		const now = new Date().toISOString();
		// yyyymmdd
		const date = now.slice(0, 10).replace(/-/g, '');
		// 20231013T150026Z
		const fileName = now.slice(0, 19).replace(/[-:]/g, '') + "Z";

		const blob = new Blob([json]);
		const stream: ReadableStream<Uint8Array> = blob.stream();

		const compressedStream = stream.pipeThrough(
			new CompressionStream("gzip")
		);
		await env.LOG_BUCKET.put(`tail/${scriptName}/${date}/${fileName}_${Math.random().toString(36).substring(2, 18)}.log.gz`, await new Response(compressedStream).arrayBuffer(), {
			httpMetadata: {
				contentType: "application/json",
				contentEncoding: "gzip",
			}
		});
	}
};
