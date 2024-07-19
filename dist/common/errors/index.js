"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonException = void 0;
const error_codes_1 = require("../constants/error-codes");
class CommonException {
    constructor(code, message, data, success = false, time = new Date(), count /* paging uchun */) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.success = success;
        this.time = time;
        this.count = count;
    }
    static Success(data, count) {
        return new CommonException(0, "ok", data, true, new Date(), count);
    }
    static UnknownError(data, meta = {}) {
        return new CommonException(error_codes_1.ERROR_CODES.BASE, "Unknown error", data);
    }
    static ValidationError(data) {
        return new CommonException(error_codes_1.ERROR_CODES.BASE + 1, "Validation Error", data);
    }
}
exports.CommonException = CommonException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2Vycm9ycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBdUQ7QUFFdkQsTUFBYSxlQUFlO0lBQzFCLFlBQ1MsSUFBWSxFQUNaLE9BQWUsRUFDZixJQUFTLEVBQ1QsVUFBbUIsS0FBSyxFQUN4QixPQUFPLElBQUksSUFBSSxFQUFFLEVBQ2pCLEtBQWMsQ0FBQyxrQkFBa0I7UUFMakMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ1QsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFTO0lBQ3BCLENBQUM7SUFDRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFNO1FBQ2hDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNNLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBVSxFQUFFLE9BQVksRUFBRTtRQUNuRCxPQUFPLElBQUksZUFBZSxDQUFDLHlCQUFXLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFpQztRQUM3RCxPQUFPLElBQUksZUFBZSxDQUFDLHlCQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0NBQ0Y7QUFuQkQsMENBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBFUlJPUl9DT0RFUyB9IGZyb20gXCIuLi9jb25zdGFudHMvZXJyb3ItY29kZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25FeGNlcHRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvZGU6IG51bWJlcixcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZGF0YTogYW55LFxyXG4gICAgcHVibGljIHN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgIHB1YmxpYyB0aW1lID0gbmV3IERhdGUoKSxcclxuICAgIHB1YmxpYyBjb3VudD86IG51bWJlciAvKiBwYWdpbmcgdWNodW4gKi9cclxuICApIHt9XHJcbiAgcHVibGljIHN0YXRpYyBTdWNjZXNzKGRhdGEsIGNvdW50Pykge1xyXG4gICAgcmV0dXJuIG5ldyBDb21tb25FeGNlcHRpb24oMCwgXCJva1wiLCBkYXRhLCB0cnVlLCBuZXcgRGF0ZSgpLCBjb3VudCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgVW5rbm93bkVycm9yKGRhdGE/OiBhbnksIG1ldGE6IGFueSA9IHt9KSB7XHJcbiAgICByZXR1cm4gbmV3IENvbW1vbkV4Y2VwdGlvbihFUlJPUl9DT0RFUy5CQVNFLCBcIlVua25vd24gZXJyb3JcIiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIFZhbGlkYXRpb25FcnJvcihkYXRhPzogVmFsaWRhdGlvbkVycm9yW10gfCBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgQ29tbW9uRXhjZXB0aW9uKEVSUk9SX0NPREVTLkJBU0UgKyAxLCBcIlZhbGlkYXRpb24gRXJyb3JcIiwgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==