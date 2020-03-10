// Error handling.
//
// NOTE: This is not a good error handler, this is a simple one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/#error-handling
async function errorHandler(ctx, next) {
	try {
		await next()
	} catch (err) {
		if (err instanceof ValidationError) {
			ctx.status = 400
			ctx.body = {
				error: 'ValidationError',
				errors: err.data
			}
		} else if (err instanceof ForeignKeyViolationError) {
			ctx.status = 409
			ctx.body = {
				error: 'ForeignKeyViolationError'
			}
		} else {
			ctx.status = 500
			ctx.body = {
				error: 'InternalServerError',
				message: err.message || {}
			}
		}
	}
}
export default errorHandler;

