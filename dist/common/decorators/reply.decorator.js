"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyDecorator = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const errors_1 = require("../errors");
const status_codes_1 = require("../constants/status-codes");
const class_validator_1 = require("class-validator");
exports.replyDecorator = (0, fastify_plugin_1.default)(function pl(instance, options, next) {
    instance.decorateReply("success", function (data = "ok", count = undefined) {
        let response = errors_1.CommonException.Success(data);
        if (count)
            response.count = count;
        this.status(200).send(response);
    });
    instance.setErrorHandler((error, _request, response) => {
        console.error("================================ GLOBAL ERROR HANDLER =================================\n", error);
        if (error instanceof class_validator_1.ValidationError)
            return response
                .status(404)
                .send(errors_1.CommonException.ValidationError(error.message));
        if (error.code && error["time"] && error.hasOwnProperty("success"))
            return response.status(status_codes_1.StatusCodes.BAD_REQUEST).send(error);
        return response
            .status(status_codes_1.StatusCodes.BAD_REQUEST)
            .send(errors_1.CommonException.UnknownError(error.message));
    });
    next();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbHkuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9kZWNvcmF0b3JzL3JlcGx5LmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNEVBQWdDO0FBQ2hDLHNDQUE0QztBQUM1Qyw0REFBd0Q7QUFDeEQscURBQWtEO0FBRXJDLFFBQUEsY0FBYyxHQUFHLElBQUEsd0JBQUUsRUFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUk7SUFDbEUsUUFBUSxDQUFDLGFBQWEsQ0FDcEIsU0FBUyxFQUNULFVBQVUsT0FBWSxJQUFJLEVBQUUsS0FBSyxHQUFHLFNBQVM7UUFDM0MsSUFBSSxRQUFRLEdBQUcsd0JBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxLQUFLO1lBQUUsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUNGLENBQUM7SUFFRixRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUNyRCxPQUFPLENBQUMsS0FBSyxDQUNYLDJGQUEyRixFQUMzRixLQUFLLENBQ04sQ0FBQztRQUVGLElBQUksS0FBSyxZQUFZLGlDQUFlO1lBQ2xDLE9BQU8sUUFBUTtpQkFDWixNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLElBQUksQ0FBQyx3QkFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQ2hFLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQywwQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5RCxPQUFPLFFBQVE7YUFDWixNQUFNLENBQUMsMEJBQVcsQ0FBQyxXQUFXLENBQUM7YUFDL0IsSUFBSSxDQUFDLHdCQUFlLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcCBmcm9tIFwiZmFzdGlmeS1wbHVnaW5cIjtcclxuaW1wb3J0IHsgQ29tbW9uRXhjZXB0aW9uIH0gZnJvbSBcIi4uL2Vycm9yc1wiO1xyXG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCIuLi9jb25zdGFudHMvc3RhdHVzLWNvZGVzXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvciB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZXBseURlY29yYXRvciA9IGZwKGZ1bmN0aW9uIHBsKGluc3RhbmNlLCBvcHRpb25zLCBuZXh0KSB7XHJcbiAgaW5zdGFuY2UuZGVjb3JhdGVSZXBseShcclxuICAgIFwic3VjY2Vzc1wiLFxyXG4gICAgZnVuY3Rpb24gKGRhdGE6IGFueSA9IFwib2tcIiwgY291bnQgPSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gQ29tbW9uRXhjZXB0aW9uLlN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgIGlmIChjb3VudCkgcmVzcG9uc2UuY291bnQgPSBjb3VudDtcclxuICAgICAgdGhpcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3BvbnNlKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBpbnN0YW5jZS5zZXRFcnJvckhhbmRsZXIoKGVycm9yLCBfcmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gR0xPQkFMIEVSUk9SIEhBTkRMRVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXCIsXHJcbiAgICAgIGVycm9yXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFZhbGlkYXRpb25FcnJvcilcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgLnN0YXR1cyg0MDQpXHJcbiAgICAgICAgLnNlbmQoQ29tbW9uRXhjZXB0aW9uLlZhbGlkYXRpb25FcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICBpZiAoZXJyb3IuY29kZSAmJiBlcnJvcltcInRpbWVcIl0gJiYgZXJyb3IuaGFzT3duUHJvcGVydHkoXCJzdWNjZXNzXCIpKVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKS5zZW5kKGVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgLnN0YXR1cyhTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVClcclxuICAgICAgLnNlbmQoQ29tbW9uRXhjZXB0aW9uLlVua25vd25FcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgfSk7XHJcblxyXG4gIG5leHQoKTtcclxufSk7XHJcbiJdfQ==