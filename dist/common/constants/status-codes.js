"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCodes = void 0;
// Generated file. Do not edit
var StatusCodes;
(function (StatusCodes) {
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.1
     *
     * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
     */
    StatusCodes[StatusCodes["CONTINUE"] = 100] = "CONTINUE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2
     *
     * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
     */
    StatusCodes[StatusCodes["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1
     *
     * This code indicates that the server has received and is processing the request, but no response is available yet.
     */
    StatusCodes[StatusCodes["PROCESSING"] = 102] = "PROCESSING";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.1
     *
     * The request has succeeded. The meaning of a success varies depending on the HTTP method:
     * GET: The resource has been fetched and is transmitted in the message body.
     * HEAD: The entity headers are in the message body.
     * POST: The resource describing the result of the action is transmitted in the message body.
     * TRACE: The message body contains the request message as received by the server
     */
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.2
     *
     * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
     */
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.3
     *
     * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
     */
    StatusCodes[StatusCodes["ACCEPTED"] = 202] = "ACCEPTED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
     *
     * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
     */
    StatusCodes[StatusCodes["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5
     *
     * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
     */
    StatusCodes[StatusCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6
     *
     * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
     */
    StatusCodes[StatusCodes["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1
     *
     * This response code is used because of range header sent by the client to separate download into multiple streams.
     */
    StatusCodes[StatusCodes["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.2
     *
     * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
     */
    StatusCodes[StatusCodes["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.1
     *
     * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
     */
    StatusCodes[StatusCodes["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2
     *
     * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
     */
    StatusCodes[StatusCodes["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.3
     *
     * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
     */
    StatusCodes[StatusCodes["MOVED_TEMPORARILY"] = 302] = "MOVED_TEMPORARILY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4
     *
     * Server sent this response to directing client to get requested resource to another URI with an GET request.
     */
    StatusCodes[StatusCodes["SEE_OTHER"] = 303] = "SEE_OTHER";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.1
     *
     * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
     */
    StatusCodes[StatusCodes["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    /**
     * @deprecated
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.6
     *
     * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
     */
    StatusCodes[StatusCodes["USE_PROXY"] = 305] = "USE_PROXY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7
     *
     * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     */
    StatusCodes[StatusCodes["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3
     *
     * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     */
    StatusCodes[StatusCodes["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.1
     *
     * This response means that server could not understand the request due to invalid syntax.
     */
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1
     *
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
     */
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2
     *
     * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
     */
    StatusCodes[StatusCodes["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.3
     *
     * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
     */
    StatusCodes[StatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4
     *
     * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
     */
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.5
     *
     * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
     */
    StatusCodes[StatusCodes["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6
     *
     * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
     */
    StatusCodes[StatusCodes["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2
     *
     * This is similar to 401 but authentication is needed to be done by a proxy.
     */
    StatusCodes[StatusCodes["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7
     *
     * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
     */
    StatusCodes[StatusCodes["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.8
     *
     * This response is sent when a request conflicts with the current state of the server.
     */
    StatusCodes[StatusCodes["CONFLICT"] = 409] = "CONFLICT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.9
     *
     * This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
     */
    StatusCodes[StatusCodes["GONE"] = 410] = "GONE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.10
     *
     * The server rejected the request because the Content-Length header field is not defined and the server requires it.
     */
    StatusCodes[StatusCodes["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2
     *
     * The client has indicated preconditions in its headers which the server does not meet.
     */
    StatusCodes[StatusCodes["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11
     *
     * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
     */
    StatusCodes[StatusCodes["REQUEST_TOO_LONG"] = 413] = "REQUEST_TOO_LONG";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12
     *
     * The URI requested by the client is longer than the server is willing to interpret.
     */
    StatusCodes[StatusCodes["REQUEST_URI_TOO_LONG"] = 414] = "REQUEST_URI_TOO_LONG";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.13
     *
     * The media format of the requested data is not supported by the server, so the server is rejecting the request.
     */
    StatusCodes[StatusCodes["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4
     *
     * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
     */
    StatusCodes[StatusCodes["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14
     *
     * This response code means the expectation indicated by the Expect request header field can't be met by the server.
     */
    StatusCodes[StatusCodes["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2324#section-2.3.2
     *
     * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
     */
    StatusCodes[StatusCodes["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
     *
     * The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. This condition is considered to be temporary. If the request which received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action.
     */
    StatusCodes[StatusCodes["INSUFFICIENT_SPACE_ON_RESOURCE"] = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE";
    /**
     * @deprecated
     * Official Documentation @ https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt
     *
     * A deprecated response used by the Spring Framework when a method has failed.
     */
    StatusCodes[StatusCodes["METHOD_FAILURE"] = 420] = "METHOD_FAILURE";
    /**
     * Official Documentation @ https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
     *
     * Defined in the specification of HTTP/2 to indicate that a server is not able to produce a response for the combination of scheme and authority that are included in the request URI.
     */
    StatusCodes[StatusCodes["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3
     *
     * The request was well-formed but was unable to be followed due to semantic errors.
     */
    StatusCodes[StatusCodes["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.4
     *
     * The resource that is being accessed is locked.
     */
    StatusCodes[StatusCodes["LOCKED"] = 423] = "LOCKED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.5
     *
     * The request failed due to failure of a previous request.
     */
    StatusCodes[StatusCodes["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3
     *
     * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
     */
    StatusCodes[StatusCodes["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4
     *
     * The user has sent too many requests in a given amount of time ("rate limiting").
     */
    StatusCodes[StatusCodes["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5
     *
     * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
     */
    StatusCodes[StatusCodes["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7725
     *
     * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
     */
    StatusCodes[StatusCodes["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.1
     *
     * The server encountered an unexpected condition that prevented it from fulfilling the request.
     */
    StatusCodes[StatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2
     *
     * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
     */
    StatusCodes[StatusCodes["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.3
     *
     * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
     */
    StatusCodes[StatusCodes["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4
     *
     * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
     */
    StatusCodes[StatusCodes["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.5
     *
     * This error response is given when the server is acting as a gateway and cannot get a response in time.
     */
    StatusCodes[StatusCodes["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.6
     *
     * The HTTP version used in the request is not supported by the server.
     */
    StatusCodes[StatusCodes["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
     *
     * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
     */
    StatusCodes[StatusCodes["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6
     *
     * The 511 status code indicates that the client needs to authenticate to gain network access.
     */
    StatusCodes[StatusCodes["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(StatusCodes || (exports.StatusCodes = StatusCodes = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWNvZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9jb25zdGFudHMvc3RhdHVzLWNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhCQUE4QjtBQUM5QixJQUFZLFdBdVZUO0FBdlZILFdBQVksV0FBVztJQUNuQjs7OztPQUlHO0lBQ0gsdURBQWMsQ0FBQTtJQUNkOzs7O09BSUc7SUFDSCw2RUFBeUIsQ0FBQTtJQUN6Qjs7OztPQUlHO0lBQ0gsMkRBQWdCLENBQUE7SUFDaEI7Ozs7Ozs7O09BUUc7SUFDSCwyQ0FBUSxDQUFBO0lBQ1I7Ozs7T0FJRztJQUNILHFEQUFhLENBQUE7SUFDYjs7OztPQUlHO0lBQ0gsdURBQWMsQ0FBQTtJQUNkOzs7O09BSUc7SUFDSCxpR0FBbUMsQ0FBQTtJQUNuQzs7OztPQUlHO0lBQ0gsMkRBQWdCLENBQUE7SUFDaEI7Ozs7T0FJRztJQUNILGlFQUFtQixDQUFBO0lBQ25COzs7O09BSUc7SUFDSCxxRUFBcUIsQ0FBQTtJQUNyQjs7OztPQUlHO0lBQ0gsK0RBQWtCLENBQUE7SUFDbEI7Ozs7T0FJRztJQUNILHVFQUFzQixDQUFBO0lBQ3RCOzs7O09BSUc7SUFDSCx5RUFBdUIsQ0FBQTtJQUN2Qjs7OztPQUlHO0lBQ0gseUVBQXVCLENBQUE7SUFDdkI7Ozs7T0FJRztJQUNILHlEQUFlLENBQUE7SUFDZjs7OztPQUlHO0lBQ0gsK0RBQWtCLENBQUE7SUFDbEI7Ozs7O09BS0c7SUFDSCx5REFBZSxDQUFBO0lBQ2Y7Ozs7T0FJRztJQUNILDJFQUF3QixDQUFBO0lBQ3hCOzs7O09BSUc7SUFDSCwyRUFBd0IsQ0FBQTtJQUN4Qjs7OztPQUlHO0lBQ0gsNkRBQWlCLENBQUE7SUFDakI7Ozs7T0FJRztJQUNILCtEQUFrQixDQUFBO0lBQ2xCOzs7O09BSUc7SUFDSCx1RUFBc0IsQ0FBQTtJQUN0Qjs7OztPQUlHO0lBQ0gseURBQWUsQ0FBQTtJQUNmOzs7O09BSUc7SUFDSCx5REFBZSxDQUFBO0lBQ2Y7Ozs7T0FJRztJQUNILDJFQUF3QixDQUFBO0lBQ3hCOzs7O09BSUc7SUFDSCxtRUFBb0IsQ0FBQTtJQUNwQjs7OztPQUlHO0lBQ0gsaUdBQW1DLENBQUE7SUFDbkM7Ozs7T0FJRztJQUNILHFFQUFxQixDQUFBO0lBQ3JCOzs7O09BSUc7SUFDSCx1REFBYyxDQUFBO0lBQ2Q7Ozs7T0FJRztJQUNILCtDQUFVLENBQUE7SUFDVjs7OztPQUlHO0lBQ0gscUVBQXFCLENBQUE7SUFDckI7Ozs7T0FJRztJQUNILDZFQUF5QixDQUFBO0lBQ3pCOzs7O09BSUc7SUFDSCx1RUFBc0IsQ0FBQTtJQUN0Qjs7OztPQUlHO0lBQ0gsK0VBQTBCLENBQUE7SUFDMUI7Ozs7T0FJRztJQUNILG1GQUE0QixDQUFBO0lBQzVCOzs7O09BSUc7SUFDSCxxR0FBcUMsQ0FBQTtJQUNyQzs7OztPQUlHO0lBQ0gsMkVBQXdCLENBQUE7SUFDeEI7Ozs7T0FJRztJQUNILDZEQUFpQixDQUFBO0lBQ2pCOzs7O09BSUc7SUFDSCxtR0FBb0MsQ0FBQTtJQUNwQzs7Ozs7T0FLRztJQUNILG1FQUFvQixDQUFBO0lBQ3BCOzs7O09BSUc7SUFDSCw2RUFBeUIsQ0FBQTtJQUN6Qjs7OztPQUlHO0lBQ0gsK0VBQTBCLENBQUE7SUFDMUI7Ozs7T0FJRztJQUNILG1EQUFZLENBQUE7SUFDWjs7OztPQUlHO0lBQ0gseUVBQXVCLENBQUE7SUFDdkI7Ozs7T0FJRztJQUNILGlGQUEyQixDQUFBO0lBQzNCOzs7O09BSUc7SUFDSCx5RUFBdUIsQ0FBQTtJQUN2Qjs7OztPQUlHO0lBQ0gscUdBQXFDLENBQUE7SUFDckM7Ozs7T0FJRztJQUNILGlHQUFtQyxDQUFBO0lBQ25DOzs7O09BSUc7SUFDSCxpRkFBMkIsQ0FBQTtJQUMzQjs7OztPQUlHO0lBQ0gscUVBQXFCLENBQUE7SUFDckI7Ozs7T0FJRztJQUNILDZEQUFpQixDQUFBO0lBQ2pCOzs7O09BSUc7SUFDSCw2RUFBeUIsQ0FBQTtJQUN6Qjs7OztPQUlHO0lBQ0gscUVBQXFCLENBQUE7SUFDckI7Ozs7T0FJRztJQUNILDJGQUFnQyxDQUFBO0lBQ2hDOzs7O09BSUc7SUFDSCwrRUFBMEIsQ0FBQTtJQUMxQjs7OztPQUlHO0lBQ0gscUdBQXFDLENBQUE7QUFDdkMsQ0FBQyxFQXZWUyxXQUFXLDJCQUFYLFdBQVcsUUF1VnBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZpbGUuIERvIG5vdCBlZGl0XHJcbmV4cG9ydCBlbnVtIFN0YXR1c0NvZGVzIHtcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4yLjFcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGludGVyaW0gcmVzcG9uc2UgaW5kaWNhdGVzIHRoYXQgZXZlcnl0aGluZyBzbyBmYXIgaXMgT0sgYW5kIHRoYXQgdGhlIGNsaWVudCBzaG91bGQgY29udGludWUgd2l0aCB0aGUgcmVxdWVzdCBvciBpZ25vcmUgaXQgaWYgaXQgaXMgYWxyZWFkeSBmaW5pc2hlZC5cclxuICAgICAqL1xyXG4gICAgQ09OVElOVUUgPSAxMDAsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4yXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBjb2RlIGlzIHNlbnQgaW4gcmVzcG9uc2UgdG8gYW4gVXBncmFkZSByZXF1ZXN0IGhlYWRlciBieSB0aGUgY2xpZW50LCBhbmQgaW5kaWNhdGVzIHRoZSBwcm90b2NvbCB0aGUgc2VydmVyIGlzIHN3aXRjaGluZyB0b28uXHJcbiAgICAgKi9cclxuICAgIFNXSVRDSElOR19QUk9UT0NPTFMgPSAxMDEsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjFcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIHNlcnZlciBoYXMgcmVjZWl2ZWQgYW5kIGlzIHByb2Nlc3NpbmcgdGhlIHJlcXVlc3QsIGJ1dCBubyByZXNwb25zZSBpcyBhdmFpbGFibGUgeWV0LlxyXG4gICAgICovXHJcbiAgICBQUk9DRVNTSU5HID0gMTAyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMVxyXG4gICAgICpcclxuICAgICAqIFRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQuIFRoZSBtZWFuaW5nIG9mIGEgc3VjY2VzcyB2YXJpZXMgZGVwZW5kaW5nIG9uIHRoZSBIVFRQIG1ldGhvZDpcclxuICAgICAqIEdFVDogVGhlIHJlc291cmNlIGhhcyBiZWVuIGZldGNoZWQgYW5kIGlzIHRyYW5zbWl0dGVkIGluIHRoZSBtZXNzYWdlIGJvZHkuXHJcbiAgICAgKiBIRUFEOiBUaGUgZW50aXR5IGhlYWRlcnMgYXJlIGluIHRoZSBtZXNzYWdlIGJvZHkuXHJcbiAgICAgKiBQT1NUOiBUaGUgcmVzb3VyY2UgZGVzY3JpYmluZyB0aGUgcmVzdWx0IG9mIHRoZSBhY3Rpb24gaXMgdHJhbnNtaXR0ZWQgaW4gdGhlIG1lc3NhZ2UgYm9keS5cclxuICAgICAqIFRSQUNFOiBUaGUgbWVzc2FnZSBib2R5IGNvbnRhaW5zIHRoZSByZXF1ZXN0IG1lc3NhZ2UgYXMgcmVjZWl2ZWQgYnkgdGhlIHNlcnZlclxyXG4gICAgICovXHJcbiAgICBPSyA9IDIwMCxcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjJcclxuICAgICAqXHJcbiAgICAgKiBUaGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkIGFuZCBhIG5ldyByZXNvdXJjZSBoYXMgYmVlbiBjcmVhdGVkIGFzIGEgcmVzdWx0IG9mIGl0LiBUaGlzIGlzIHR5cGljYWxseSB0aGUgcmVzcG9uc2Ugc2VudCBhZnRlciBhIFBVVCByZXF1ZXN0LlxyXG4gICAgICovXHJcbiAgICBDUkVBVEVEID0gMjAxLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuM1xyXG4gICAgICpcclxuICAgICAqIFRoZSByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGJ1dCBub3QgeWV0IGFjdGVkIHVwb24uIEl0IGlzIG5vbi1jb21taXR0YWwsIG1lYW5pbmcgdGhhdCB0aGVyZSBpcyBubyB3YXkgaW4gSFRUUCB0byBsYXRlciBzZW5kIGFuIGFzeW5jaHJvbm91cyByZXNwb25zZSBpbmRpY2F0aW5nIHRoZSBvdXRjb21lIG9mIHByb2Nlc3NpbmcgdGhlIHJlcXVlc3QuIEl0IGlzIGludGVuZGVkIGZvciBjYXNlcyB3aGVyZSBhbm90aGVyIHByb2Nlc3Mgb3Igc2VydmVyIGhhbmRsZXMgdGhlIHJlcXVlc3QsIG9yIGZvciBiYXRjaCBwcm9jZXNzaW5nLlxyXG4gICAgICovXHJcbiAgICBBQ0NFUFRFRCA9IDIwMixcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjRcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIHJlc3BvbnNlIGNvZGUgbWVhbnMgcmV0dXJuZWQgbWV0YS1pbmZvcm1hdGlvbiBzZXQgaXMgbm90IGV4YWN0IHNldCBhcyBhdmFpbGFibGUgZnJvbSB0aGUgb3JpZ2luIHNlcnZlciwgYnV0IGNvbGxlY3RlZCBmcm9tIGEgbG9jYWwgb3IgYSB0aGlyZCBwYXJ0eSBjb3B5LiBFeGNlcHQgdGhpcyBjb25kaXRpb24sIDIwMCBPSyByZXNwb25zZSBzaG91bGQgYmUgcHJlZmVycmVkIGluc3RlYWQgb2YgdGhpcyByZXNwb25zZS5cclxuICAgICAqL1xyXG4gICAgTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04gPSAyMDMsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy41XHJcbiAgICAgKlxyXG4gICAgICogVGhlcmUgaXMgbm8gY29udGVudCB0byBzZW5kIGZvciB0aGlzIHJlcXVlc3QsIGJ1dCB0aGUgaGVhZGVycyBtYXkgYmUgdXNlZnVsLiBUaGUgdXNlci1hZ2VudCBtYXkgdXBkYXRlIGl0cyBjYWNoZWQgaGVhZGVycyBmb3IgdGhpcyByZXNvdXJjZSB3aXRoIHRoZSBuZXcgb25lcy5cclxuICAgICAqL1xyXG4gICAgTk9fQ09OVEVOVCA9IDIwNCxcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjZcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIHJlc3BvbnNlIGNvZGUgaXMgc2VudCBhZnRlciBhY2NvbXBsaXNoaW5nIHJlcXVlc3QgdG8gdGVsbCB1c2VyIGFnZW50IHJlc2V0IGRvY3VtZW50IHZpZXcgd2hpY2ggc2VudCB0aGlzIHJlcXVlc3QuXHJcbiAgICAgKi9cclxuICAgIFJFU0VUX0NPTlRFTlQgPSAyMDUsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMyNzZWN0aW9uLTQuMVxyXG4gICAgICpcclxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBpcyB1c2VkIGJlY2F1c2Ugb2YgcmFuZ2UgaGVhZGVyIHNlbnQgYnkgdGhlIGNsaWVudCB0byBzZXBhcmF0ZSBkb3dubG9hZCBpbnRvIG11bHRpcGxlIHN0cmVhbXMuXHJcbiAgICAgKi9cclxuICAgIFBBUlRJQUxfQ09OVEVOVCA9IDIwNixcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMlxyXG4gICAgICpcclxuICAgICAqIEEgTXVsdGktU3RhdHVzIHJlc3BvbnNlIGNvbnZleXMgaW5mb3JtYXRpb24gYWJvdXQgbXVsdGlwbGUgcmVzb3VyY2VzIGluIHNpdHVhdGlvbnMgd2hlcmUgbXVsdGlwbGUgc3RhdHVzIGNvZGVzIG1pZ2h0IGJlIGFwcHJvcHJpYXRlLlxyXG4gICAgICovXHJcbiAgICBNVUxUSV9TVEFUVVMgPSAyMDcsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4xXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHJlcXVlc3QgaGFzIG1vcmUgdGhhbiBvbmUgcG9zc2libGUgcmVzcG9uc2VzLiBVc2VyLWFnZW50IG9yIHVzZXIgc2hvdWxkIGNob29zZSBvbmUgb2YgdGhlbS4gVGhlcmUgaXMgbm8gc3RhbmRhcmRpemVkIHdheSB0byBjaG9vc2Ugb25lIG9mIHRoZSByZXNwb25zZXMuXHJcbiAgICAgKi9cclxuICAgIE1VTFRJUExFX0NIT0lDRVMgPSAzMDAsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4yXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyByZXNwb25zZSBjb2RlIG1lYW5zIHRoYXQgVVJJIG9mIHJlcXVlc3RlZCByZXNvdXJjZSBoYXMgYmVlbiBjaGFuZ2VkLiBQcm9iYWJseSwgbmV3IFVSSSB3b3VsZCBiZSBnaXZlbiBpbiB0aGUgcmVzcG9uc2UuXHJcbiAgICAgKi9cclxuICAgIE1PVkVEX1BFUk1BTkVOVExZID0gMzAxLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuM1xyXG4gICAgICpcclxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBtZWFucyB0aGF0IFVSSSBvZiByZXF1ZXN0ZWQgcmVzb3VyY2UgaGFzIGJlZW4gY2hhbmdlZCB0ZW1wb3JhcmlseS4gTmV3IGNoYW5nZXMgaW4gdGhlIFVSSSBtaWdodCBiZSBtYWRlIGluIHRoZSBmdXR1cmUuIFRoZXJlZm9yZSwgdGhpcyBzYW1lIFVSSSBzaG91bGQgYmUgdXNlZCBieSB0aGUgY2xpZW50IGluIGZ1dHVyZSByZXF1ZXN0cy5cclxuICAgICAqL1xyXG4gICAgTU9WRURfVEVNUE9SQVJJTFkgPSAzMDIsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC40XHJcbiAgICAgKlxyXG4gICAgICogU2VydmVyIHNlbnQgdGhpcyByZXNwb25zZSB0byBkaXJlY3RpbmcgY2xpZW50IHRvIGdldCByZXF1ZXN0ZWQgcmVzb3VyY2UgdG8gYW5vdGhlciBVUkkgd2l0aCBhbiBHRVQgcmVxdWVzdC5cclxuICAgICAqL1xyXG4gICAgU0VFX09USEVSID0gMzAzLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzIjc2VjdGlvbi00LjFcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGlzIHVzZWQgZm9yIGNhY2hpbmcgcHVycG9zZXMuIEl0IGlzIHRlbGxpbmcgdG8gY2xpZW50IHRoYXQgcmVzcG9uc2UgaGFzIG5vdCBiZWVuIG1vZGlmaWVkLiBTbywgY2xpZW50IGNhbiBjb250aW51ZSB0byB1c2Ugc2FtZSBjYWNoZWQgdmVyc2lvbiBvZiByZXNwb25zZS5cclxuICAgICAqL1xyXG4gICAgTk9UX01PRElGSUVEID0gMzA0LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjZcclxuICAgICAqXHJcbiAgICAgKiBXYXMgZGVmaW5lZCBpbiBhIHByZXZpb3VzIHZlcnNpb24gb2YgdGhlIEhUVFAgc3BlY2lmaWNhdGlvbiB0byBpbmRpY2F0ZSB0aGF0IGEgcmVxdWVzdGVkIHJlc3BvbnNlIG11c3QgYmUgYWNjZXNzZWQgYnkgYSBwcm94eS4gSXQgaGFzIGJlZW4gZGVwcmVjYXRlZCBkdWUgdG8gc2VjdXJpdHkgY29uY2VybnMgcmVnYXJkaW5nIGluLWJhbmQgY29uZmlndXJhdGlvbiBvZiBhIHByb3h5LlxyXG4gICAgICovXHJcbiAgICBVU0VfUFJPWFkgPSAzMDUsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC43XHJcbiAgICAgKlxyXG4gICAgICogU2VydmVyIHNlbnQgdGhpcyByZXNwb25zZSB0byBkaXJlY3RpbmcgY2xpZW50IHRvIGdldCByZXF1ZXN0ZWQgcmVzb3VyY2UgdG8gYW5vdGhlciBVUkkgd2l0aCBzYW1lIG1ldGhvZCB0aGF0IHVzZWQgcHJpb3IgcmVxdWVzdC4gVGhpcyBoYXMgdGhlIHNhbWUgc2VtYW50aWMgdGhhbiB0aGUgMzAyIEZvdW5kIEhUVFAgcmVzcG9uc2UgY29kZSwgd2l0aCB0aGUgZXhjZXB0aW9uIHRoYXQgdGhlIHVzZXIgYWdlbnQgbXVzdCBub3QgY2hhbmdlIHRoZSBIVFRQIG1ldGhvZCB1c2VkOiBpZiBhIFBPU1Qgd2FzIHVzZWQgaW4gdGhlIGZpcnN0IHJlcXVlc3QsIGEgUE9TVCBtdXN0IGJlIHVzZWQgaW4gdGhlIHNlY29uZCByZXF1ZXN0LlxyXG4gICAgICovXHJcbiAgICBURU1QT1JBUllfUkVESVJFQ1QgPSAzMDcsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzUzOCNzZWN0aW9uLTNcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIG1lYW5zIHRoYXQgdGhlIHJlc291cmNlIGlzIG5vdyBwZXJtYW5lbnRseSBsb2NhdGVkIGF0IGFub3RoZXIgVVJJLCBzcGVjaWZpZWQgYnkgdGhlIExvY2F0aW9uOiBIVFRQIFJlc3BvbnNlIGhlYWRlci4gVGhpcyBoYXMgdGhlIHNhbWUgc2VtYW50aWNzIGFzIHRoZSAzMDEgTW92ZWQgUGVybWFuZW50bHkgSFRUUCByZXNwb25zZSBjb2RlLCB3aXRoIHRoZSBleGNlcHRpb24gdGhhdCB0aGUgdXNlciBhZ2VudCBtdXN0IG5vdCBjaGFuZ2UgdGhlIEhUVFAgbWV0aG9kIHVzZWQ6IGlmIGEgUE9TVCB3YXMgdXNlZCBpbiB0aGUgZmlyc3QgcmVxdWVzdCwgYSBQT1NUIG11c3QgYmUgdXNlZCBpbiB0aGUgc2Vjb25kIHJlcXVlc3QuXHJcbiAgICAgKi9cclxuICAgIFBFUk1BTkVOVF9SRURJUkVDVCA9IDMwOCxcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjFcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIHJlc3BvbnNlIG1lYW5zIHRoYXQgc2VydmVyIGNvdWxkIG5vdCB1bmRlcnN0YW5kIHRoZSByZXF1ZXN0IGR1ZSB0byBpbnZhbGlkIHN5bnRheC5cclxuICAgICAqL1xyXG4gICAgQkFEX1JFUVVFU1QgPSA0MDAsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzNSNzZWN0aW9uLTMuMVxyXG4gICAgICpcclxuICAgICAqIEFsdGhvdWdoIHRoZSBIVFRQIHN0YW5kYXJkIHNwZWNpZmllcyBcInVuYXV0aG9yaXplZFwiLCBzZW1hbnRpY2FsbHkgdGhpcyByZXNwb25zZSBtZWFucyBcInVuYXV0aGVudGljYXRlZFwiLiBUaGF0IGlzLCB0aGUgY2xpZW50IG11c3QgYXV0aGVudGljYXRlIGl0c2VsZiB0byBnZXQgdGhlIHJlcXVlc3RlZCByZXNwb25zZS5cclxuICAgICAqL1xyXG4gICAgVU5BVVRIT1JJWkVEID0gNDAxLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBpcyByZXNlcnZlZCBmb3IgZnV0dXJlIHVzZS4gSW5pdGlhbCBhaW0gZm9yIGNyZWF0aW5nIHRoaXMgY29kZSB3YXMgdXNpbmcgaXQgZm9yIGRpZ2l0YWwgcGF5bWVudCBzeXN0ZW1zIGhvd2V2ZXIgdGhpcyBpcyBub3QgdXNlZCBjdXJyZW50bHkuXHJcbiAgICAgKi9cclxuICAgIFBBWU1FTlRfUkVRVUlSRUQgPSA0MDIsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4zXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGNsaWVudCBkb2VzIG5vdCBoYXZlIGFjY2VzcyByaWdodHMgdG8gdGhlIGNvbnRlbnQsIGkuZS4gdGhleSBhcmUgdW5hdXRob3JpemVkLCBzbyBzZXJ2ZXIgaXMgcmVqZWN0aW5nIHRvIGdpdmUgcHJvcGVyIHJlc3BvbnNlLiBVbmxpa2UgNDAxLCB0aGUgY2xpZW50J3MgaWRlbnRpdHkgaXMga25vd24gdG8gdGhlIHNlcnZlci5cclxuICAgICAqL1xyXG4gICAgRk9SQklEREVOID0gNDAzLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNFxyXG4gICAgICpcclxuICAgICAqIFRoZSBzZXJ2ZXIgY2FuIG5vdCBmaW5kIHJlcXVlc3RlZCByZXNvdXJjZS4gSW4gdGhlIGJyb3dzZXIsIHRoaXMgbWVhbnMgdGhlIFVSTCBpcyBub3QgcmVjb2duaXplZC4gSW4gYW4gQVBJLCB0aGlzIGNhbiBhbHNvIG1lYW4gdGhhdCB0aGUgZW5kcG9pbnQgaXMgdmFsaWQgYnV0IHRoZSByZXNvdXJjZSBpdHNlbGYgZG9lcyBub3QgZXhpc3QuIFNlcnZlcnMgbWF5IGFsc28gc2VuZCB0aGlzIHJlc3BvbnNlIGluc3RlYWQgb2YgNDAzIHRvIGhpZGUgdGhlIGV4aXN0ZW5jZSBvZiBhIHJlc291cmNlIGZyb20gYW4gdW5hdXRob3JpemVkIGNsaWVudC4gVGhpcyByZXNwb25zZSBjb2RlIGlzIHByb2JhYmx5IHRoZSBtb3N0IGZhbW91cyBvbmUgZHVlIHRvIGl0cyBmcmVxdWVudCBvY2N1cmVuY2Ugb24gdGhlIHdlYi5cclxuICAgICAqL1xyXG4gICAgTk9UX0ZPVU5EID0gNDA0LFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNVxyXG4gICAgICpcclxuICAgICAqIFRoZSByZXF1ZXN0IG1ldGhvZCBpcyBrbm93biBieSB0aGUgc2VydmVyIGJ1dCBoYXMgYmVlbiBkaXNhYmxlZCBhbmQgY2Fubm90IGJlIHVzZWQuIEZvciBleGFtcGxlLCBhbiBBUEkgbWF5IGZvcmJpZCBERUxFVEUtaW5nIGEgcmVzb3VyY2UuIFRoZSB0d28gbWFuZGF0b3J5IG1ldGhvZHMsIEdFVCBhbmQgSEVBRCwgbXVzdCBuZXZlciBiZSBkaXNhYmxlZCBhbmQgc2hvdWxkIG5vdCByZXR1cm4gdGhpcyBlcnJvciBjb2RlLlxyXG4gICAgICovXHJcbiAgICBNRVRIT0RfTk9UX0FMTE9XRUQgPSA0MDUsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS42XHJcbiAgICAgKlxyXG4gICAgICogVGhpcyByZXNwb25zZSBpcyBzZW50IHdoZW4gdGhlIHdlYiBzZXJ2ZXIsIGFmdGVyIHBlcmZvcm1pbmcgc2VydmVyLWRyaXZlbiBjb250ZW50IG5lZ290aWF0aW9uLCBkb2Vzbid0IGZpbmQgYW55IGNvbnRlbnQgZm9sbG93aW5nIHRoZSBjcml0ZXJpYSBnaXZlbiBieSB0aGUgdXNlciBhZ2VudC5cclxuICAgICAqL1xyXG4gICAgTk9UX0FDQ0VQVEFCTEUgPSA0MDYsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzNSNzZWN0aW9uLTMuMlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgaXMgc2ltaWxhciB0byA0MDEgYnV0IGF1dGhlbnRpY2F0aW9uIGlzIG5lZWRlZCB0byBiZSBkb25lIGJ5IGEgcHJveHkuXHJcbiAgICAgKi9cclxuICAgIFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gNDA3LFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuN1xyXG4gICAgICpcclxuICAgICAqIFRoaXMgcmVzcG9uc2UgaXMgc2VudCBvbiBhbiBpZGxlIGNvbm5lY3Rpb24gYnkgc29tZSBzZXJ2ZXJzLCBldmVuIHdpdGhvdXQgYW55IHByZXZpb3VzIHJlcXVlc3QgYnkgdGhlIGNsaWVudC4gSXQgbWVhbnMgdGhhdCB0aGUgc2VydmVyIHdvdWxkIGxpa2UgdG8gc2h1dCBkb3duIHRoaXMgdW51c2VkIGNvbm5lY3Rpb24uIFRoaXMgcmVzcG9uc2UgaXMgdXNlZCBtdWNoIG1vcmUgc2luY2Ugc29tZSBicm93c2VycywgbGlrZSBDaHJvbWUsIEZpcmVmb3ggMjcrLCBvciBJRTksIHVzZSBIVFRQIHByZS1jb25uZWN0aW9uIG1lY2hhbmlzbXMgdG8gc3BlZWQgdXAgc3VyZmluZy4gQWxzbyBub3RlIHRoYXQgc29tZSBzZXJ2ZXJzIG1lcmVseSBzaHV0IGRvd24gdGhlIGNvbm5lY3Rpb24gd2l0aG91dCBzZW5kaW5nIHRoaXMgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgUkVRVUVTVF9USU1FT1VUID0gNDA4LFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuOFxyXG4gICAgICpcclxuICAgICAqIFRoaXMgcmVzcG9uc2UgaXMgc2VudCB3aGVuIGEgcmVxdWVzdCBjb25mbGljdHMgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2VydmVyLlxyXG4gICAgICovXHJcbiAgICBDT05GTElDVCA9IDQwOSxcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjlcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIHJlc3BvbnNlIHdvdWxkIGJlIHNlbnQgd2hlbiB0aGUgcmVxdWVzdGVkIGNvbnRlbnQgaGFzIGJlZW4gcGVybWVuYW50bHkgZGVsZXRlZCBmcm9tIHNlcnZlciwgd2l0aCBubyBmb3J3YXJkaW5nIGFkZHJlc3MuIENsaWVudHMgYXJlIGV4cGVjdGVkIHRvIHJlbW92ZSB0aGVpciBjYWNoZXMgYW5kIGxpbmtzIHRvIHRoZSByZXNvdXJjZS4gVGhlIEhUVFAgc3BlY2lmaWNhdGlvbiBpbnRlbmRzIHRoaXMgc3RhdHVzIGNvZGUgdG8gYmUgdXNlZCBmb3IgXCJsaW1pdGVkLXRpbWUsIHByb21vdGlvbmFsIHNlcnZpY2VzXCIuIEFQSXMgc2hvdWxkIG5vdCBmZWVsIGNvbXBlbGxlZCB0byBpbmRpY2F0ZSByZXNvdXJjZXMgdGhhdCBoYXZlIGJlZW4gZGVsZXRlZCB3aXRoIHRoaXMgc3RhdHVzIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIEdPTkUgPSA0MTAsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMFxyXG4gICAgICpcclxuICAgICAqIFRoZSBzZXJ2ZXIgcmVqZWN0ZWQgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgQ29udGVudC1MZW5ndGggaGVhZGVyIGZpZWxkIGlzIG5vdCBkZWZpbmVkIGFuZCB0aGUgc2VydmVyIHJlcXVpcmVzIGl0LlxyXG4gICAgICovXHJcbiAgICBMRU5HVEhfUkVRVUlSRUQgPSA0MTEsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMlxyXG4gICAgICpcclxuICAgICAqIFRoZSBjbGllbnQgaGFzIGluZGljYXRlZCBwcmVjb25kaXRpb25zIGluIGl0cyBoZWFkZXJzIHdoaWNoIHRoZSBzZXJ2ZXIgZG9lcyBub3QgbWVldC5cclxuICAgICAqL1xyXG4gICAgUFJFQ09ORElUSU9OX0ZBSUxFRCA9IDQxMixcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjExXHJcbiAgICAgKlxyXG4gICAgICogUmVxdWVzdCBlbnRpdHkgaXMgbGFyZ2VyIHRoYW4gbGltaXRzIGRlZmluZWQgYnkgc2VydmVyOyB0aGUgc2VydmVyIG1pZ2h0IGNsb3NlIHRoZSBjb25uZWN0aW9uIG9yIHJldHVybiBhbiBSZXRyeS1BZnRlciBoZWFkZXIgZmllbGQuXHJcbiAgICAgKi9cclxuICAgIFJFUVVFU1RfVE9PX0xPTkcgPSA0MTMsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMlxyXG4gICAgICpcclxuICAgICAqIFRoZSBVUkkgcmVxdWVzdGVkIGJ5IHRoZSBjbGllbnQgaXMgbG9uZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIGludGVycHJldC5cclxuICAgICAqL1xyXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkcgPSA0MTQsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xM1xyXG4gICAgICpcclxuICAgICAqIFRoZSBtZWRpYSBmb3JtYXQgb2YgdGhlIHJlcXVlc3RlZCBkYXRhIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlciwgc28gdGhlIHNlcnZlciBpcyByZWplY3RpbmcgdGhlIHJlcXVlc3QuXHJcbiAgICAgKi9cclxuICAgIFVOU1VQUE9SVEVEX01FRElBX1RZUEUgPSA0MTUsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMyNzZWN0aW9uLTQuNFxyXG4gICAgICpcclxuICAgICAqIFRoZSByYW5nZSBzcGVjaWZpZWQgYnkgdGhlIFJhbmdlIGhlYWRlciBmaWVsZCBpbiB0aGUgcmVxdWVzdCBjYW4ndCBiZSBmdWxmaWxsZWQ7IGl0J3MgcG9zc2libGUgdGhhdCB0aGUgcmFuZ2UgaXMgb3V0c2lkZSB0aGUgc2l6ZSBvZiB0aGUgdGFyZ2V0IFVSSSdzIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIFJFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEUgPSA0MTYsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xNFxyXG4gICAgICpcclxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBtZWFucyB0aGUgZXhwZWN0YXRpb24gaW5kaWNhdGVkIGJ5IHRoZSBFeHBlY3QgcmVxdWVzdCBoZWFkZXIgZmllbGQgY2FuJ3QgYmUgbWV0IGJ5IHRoZSBzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIEVYUEVDVEFUSU9OX0ZBSUxFRCA9IDQxNyxcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMzI0I3NlY3Rpb24tMi4zLjJcclxuICAgICAqXHJcbiAgICAgKiBBbnkgYXR0ZW1wdCB0byBicmV3IGNvZmZlZSB3aXRoIGEgdGVhcG90IHNob3VsZCByZXN1bHQgaW4gdGhlIGVycm9yIGNvZGUgXCI0MTggSSdtIGEgdGVhcG90XCIuIFRoZSByZXN1bHRpbmcgZW50aXR5IGJvZHkgTUFZIGJlIHNob3J0IGFuZCBzdG91dC5cclxuICAgICAqL1xyXG4gICAgSU1fQV9URUFQT1QgPSA0MTgsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjZcclxuICAgICAqXHJcbiAgICAgKiBUaGUgNTA3IChJbnN1ZmZpY2llbnQgU3RvcmFnZSkgc3RhdHVzIGNvZGUgbWVhbnMgdGhlIG1ldGhvZCBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZSBiZWNhdXNlIHRoZSBzZXJ2ZXIgaXMgdW5hYmxlIHRvIHN0b3JlIHRoZSByZXByZXNlbnRhdGlvbiBuZWVkZWQgdG8gc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlIHRoZSByZXF1ZXN0LiBUaGlzIGNvbmRpdGlvbiBpcyBjb25zaWRlcmVkIHRvIGJlIHRlbXBvcmFyeS4gSWYgdGhlIHJlcXVlc3Qgd2hpY2ggcmVjZWl2ZWQgdGhpcyBzdGF0dXMgY29kZSB3YXMgdGhlIHJlc3VsdCBvZiBhIHVzZXIgYWN0aW9uLCB0aGUgcmVxdWVzdCBNVVNUIE5PVCBiZSByZXBlYXRlZCB1bnRpbCBpdCBpcyByZXF1ZXN0ZWQgYnkgYSBzZXBhcmF0ZSB1c2VyIGFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFX09OX1JFU09VUkNFID0gNDE5LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvcmZjZGlmZj9kaWZmdHlwZT0tLWh3ZGlmZiZ1cmwyPWRyYWZ0LWlldGYtd2ViZGF2LXByb3RvY29sLTA2LnR4dFxyXG4gICAgICpcclxuICAgICAqIEEgZGVwcmVjYXRlZCByZXNwb25zZSB1c2VkIGJ5IHRoZSBTcHJpbmcgRnJhbWV3b3JrIHdoZW4gYSBtZXRob2QgaGFzIGZhaWxlZC5cclxuICAgICAqL1xyXG4gICAgTUVUSE9EX0ZBSUxVUkUgPSA0MjAsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL2RhdGF0cmFja2VyLmlldGYub3JnL2RvYy9odG1sL3JmYzc1NDAjc2VjdGlvbi05LjEuMlxyXG4gICAgICpcclxuICAgICAqIERlZmluZWQgaW4gdGhlIHNwZWNpZmljYXRpb24gb2YgSFRUUC8yIHRvIGluZGljYXRlIHRoYXQgYSBzZXJ2ZXIgaXMgbm90IGFibGUgdG8gcHJvZHVjZSBhIHJlc3BvbnNlIGZvciB0aGUgY29tYmluYXRpb24gb2Ygc2NoZW1lIGFuZCBhdXRob3JpdHkgdGhhdCBhcmUgaW5jbHVkZWQgaW4gdGhlIHJlcXVlc3QgVVJJLlxyXG4gICAgICovXHJcbiAgICBNSVNESVJFQ1RFRF9SRVFVRVNUID0gNDIxLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4zXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHJlcXVlc3Qgd2FzIHdlbGwtZm9ybWVkIGJ1dCB3YXMgdW5hYmxlIHRvIGJlIGZvbGxvd2VkIGR1ZSB0byBzZW1hbnRpYyBlcnJvcnMuXHJcbiAgICAgKi9cclxuICAgIFVOUFJPQ0VTU0FCTEVfRU5USVRZID0gNDIyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC40XHJcbiAgICAgKlxyXG4gICAgICogVGhlIHJlc291cmNlIHRoYXQgaXMgYmVpbmcgYWNjZXNzZWQgaXMgbG9ja2VkLlxyXG4gICAgICovXHJcbiAgICBMT0NLRUQgPSA0MjMsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjVcclxuICAgICAqXHJcbiAgICAgKiBUaGUgcmVxdWVzdCBmYWlsZWQgZHVlIHRvIGZhaWx1cmUgb2YgYSBwcmV2aW91cyByZXF1ZXN0LlxyXG4gICAgICovXHJcbiAgICBGQUlMRURfREVQRU5ERU5DWSA9IDQyNCxcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tM1xyXG4gICAgICpcclxuICAgICAqIFRoZSBvcmlnaW4gc2VydmVyIHJlcXVpcmVzIHRoZSByZXF1ZXN0IHRvIGJlIGNvbmRpdGlvbmFsLiBJbnRlbmRlZCB0byBwcmV2ZW50IHRoZSAnbG9zdCB1cGRhdGUnIHByb2JsZW0sIHdoZXJlIGEgY2xpZW50IEdFVHMgYSByZXNvdXJjZSdzIHN0YXRlLCBtb2RpZmllcyBpdCwgYW5kIFBVVHMgaXQgYmFjayB0byB0aGUgc2VydmVyLCB3aGVuIG1lYW53aGlsZSBhIHRoaXJkIHBhcnR5IGhhcyBtb2RpZmllZCB0aGUgc3RhdGUgb24gdGhlIHNlcnZlciwgbGVhZGluZyB0byBhIGNvbmZsaWN0LlxyXG4gICAgICovXHJcbiAgICBQUkVDT05ESVRJT05fUkVRVUlSRUQgPSA0MjgsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTRcclxuICAgICAqXHJcbiAgICAgKiBUaGUgdXNlciBoYXMgc2VudCB0b28gbWFueSByZXF1ZXN0cyBpbiBhIGdpdmVuIGFtb3VudCBvZiB0aW1lIChcInJhdGUgbGltaXRpbmdcIikuXHJcbiAgICAgKi9cclxuICAgIFRPT19NQU5ZX1JFUVVFU1RTID0gNDI5LFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi01XHJcbiAgICAgKlxyXG4gICAgICogVGhlIHNlcnZlciBpcyB1bndpbGxpbmcgdG8gcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIGl0cyBoZWFkZXIgZmllbGRzIGFyZSB0b28gbGFyZ2UuIFRoZSByZXF1ZXN0IE1BWSBiZSByZXN1Ym1pdHRlZCBhZnRlciByZWR1Y2luZyB0aGUgc2l6ZSBvZiB0aGUgcmVxdWVzdCBoZWFkZXIgZmllbGRzLlxyXG4gICAgICovXHJcbiAgICBSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFID0gNDMxLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc3MjVcclxuICAgICAqXHJcbiAgICAgKiBUaGUgdXNlci1hZ2VudCByZXF1ZXN0ZWQgYSByZXNvdXJjZSB0aGF0IGNhbm5vdCBsZWdhbGx5IGJlIHByb3ZpZGVkLCBzdWNoIGFzIGEgd2ViIHBhZ2UgY2Vuc29yZWQgYnkgYSBnb3Zlcm5tZW50LlxyXG4gICAgICovXHJcbiAgICBVTkFWQUlMQUJMRV9GT1JfTEVHQUxfUkVBU09OUyA9IDQ1MSxcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjFcclxuICAgICAqXHJcbiAgICAgKiBUaGUgc2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHRoYXQgcHJldmVudGVkIGl0IGZyb20gZnVsZmlsbGluZyB0aGUgcmVxdWVzdC5cclxuICAgICAqL1xyXG4gICAgSU5URVJOQUxfU0VSVkVSX0VSUk9SID0gNTAwLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMlxyXG4gICAgICpcclxuICAgICAqIFRoZSByZXF1ZXN0IG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBzZXJ2ZXIgYW5kIGNhbm5vdCBiZSBoYW5kbGVkLiBUaGUgb25seSBtZXRob2RzIHRoYXQgc2VydmVycyBhcmUgcmVxdWlyZWQgdG8gc3VwcG9ydCAoYW5kIHRoZXJlZm9yZSB0aGF0IG11c3Qgbm90IHJldHVybiB0aGlzIGNvZGUpIGFyZSBHRVQgYW5kIEhFQUQuXHJcbiAgICAgKi9cclxuICAgIE5PVF9JTVBMRU1FTlRFRCA9IDUwMSxcclxuICAgIC8qKlxyXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjNcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGVycm9yIHJlc3BvbnNlIG1lYW5zIHRoYXQgdGhlIHNlcnZlciwgd2hpbGUgd29ya2luZyBhcyBhIGdhdGV3YXkgdG8gZ2V0IGEgcmVzcG9uc2UgbmVlZGVkIHRvIGhhbmRsZSB0aGUgcmVxdWVzdCwgZ290IGFuIGludmFsaWQgcmVzcG9uc2UuXHJcbiAgICAgKi9cclxuICAgIEJBRF9HQVRFV0FZID0gNTAyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNFxyXG4gICAgICpcclxuICAgICAqIFRoZSBzZXJ2ZXIgaXMgbm90IHJlYWR5IHRvIGhhbmRsZSB0aGUgcmVxdWVzdC4gQ29tbW9uIGNhdXNlcyBhcmUgYSBzZXJ2ZXIgdGhhdCBpcyBkb3duIGZvciBtYWludGVuYW5jZSBvciB0aGF0IGlzIG92ZXJsb2FkZWQuIE5vdGUgdGhhdCB0b2dldGhlciB3aXRoIHRoaXMgcmVzcG9uc2UsIGEgdXNlci1mcmllbmRseSBwYWdlIGV4cGxhaW5pbmcgdGhlIHByb2JsZW0gc2hvdWxkIGJlIHNlbnQuIFRoaXMgcmVzcG9uc2VzIHNob3VsZCBiZSB1c2VkIGZvciB0ZW1wb3JhcnkgY29uZGl0aW9ucyBhbmQgdGhlIFJldHJ5LUFmdGVyOiBIVFRQIGhlYWRlciBzaG91bGQsIGlmIHBvc3NpYmxlLCBjb250YWluIHRoZSBlc3RpbWF0ZWQgdGltZSBiZWZvcmUgdGhlIHJlY292ZXJ5IG9mIHRoZSBzZXJ2aWNlLiBUaGUgd2VibWFzdGVyIG11c3QgYWxzbyB0YWtlIGNhcmUgYWJvdXQgdGhlIGNhY2hpbmctcmVsYXRlZCBoZWFkZXJzIHRoYXQgYXJlIHNlbnQgYWxvbmcgd2l0aCB0aGlzIHJlc3BvbnNlLCBhcyB0aGVzZSB0ZW1wb3JhcnkgY29uZGl0aW9uIHJlc3BvbnNlcyBzaG91bGQgdXN1YWxseSBub3QgYmUgY2FjaGVkLlxyXG4gICAgICovXHJcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFID0gNTAzLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNVxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZXJyb3IgcmVzcG9uc2UgaXMgZ2l2ZW4gd2hlbiB0aGUgc2VydmVyIGlzIGFjdGluZyBhcyBhIGdhdGV3YXkgYW5kIGNhbm5vdCBnZXQgYSByZXNwb25zZSBpbiB0aW1lLlxyXG4gICAgICovXHJcbiAgICBHQVRFV0FZX1RJTUVPVVQgPSA1MDQsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi42XHJcbiAgICAgKlxyXG4gICAgICogVGhlIEhUVFAgdmVyc2lvbiB1c2VkIGluIHRoZSByZXF1ZXN0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlci5cclxuICAgICAqL1xyXG4gICAgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQgPSA1MDUsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjZcclxuICAgICAqXHJcbiAgICAgKiBUaGUgc2VydmVyIGhhcyBhbiBpbnRlcm5hbCBjb25maWd1cmF0aW9uIGVycm9yOiB0aGUgY2hvc2VuIHZhcmlhbnQgcmVzb3VyY2UgaXMgY29uZmlndXJlZCB0byBlbmdhZ2UgaW4gdHJhbnNwYXJlbnQgY29udGVudCBuZWdvdGlhdGlvbiBpdHNlbGYsIGFuZCBpcyB0aGVyZWZvcmUgbm90IGEgcHJvcGVyIGVuZCBwb2ludCBpbiB0aGUgbmVnb3RpYXRpb24gcHJvY2Vzcy5cclxuICAgICAqL1xyXG4gICAgSU5TVUZGSUNJRU5UX1NUT1JBR0UgPSA1MDcsXHJcbiAgICAvKipcclxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTZcclxuICAgICAqXHJcbiAgICAgKiBUaGUgNTExIHN0YXR1cyBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjbGllbnQgbmVlZHMgdG8gYXV0aGVudGljYXRlIHRvIGdhaW4gbmV0d29yayBhY2Nlc3MuXHJcbiAgICAgKi9cclxuICAgIE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSA1MTFcclxuICB9Il19