// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
  SENSITIVE_STRING,
} from "@aws-sdk/smithy-client";
import { Readable } from "stream";

import { LexRuntimeServiceServiceException as __BaseException } from "./LexRuntimeServiceServiceException";

/**
 * @public
 * <p>The length of time or number of turns that a context remains
 *       active.</p>
 */
export interface ActiveContextTimeToLive {
  /**
   * <p>The number of seconds that the context should be active after it is
   *       first sent in a <code>PostContent</code> or <code>PostText</code>
   *       response. You can set the value between 5 and 86,400 seconds (24
   *       hours).</p>
   */
  timeToLiveInSeconds?: number;

  /**
   * <p>The number of conversation turns that the context should be active. A
   *       conversation turn is one <code>PostContent</code> or <code>PostText</code>
   *       request and the corresponding response from Amazon Lex.</p>
   */
  turnsToLive?: number;
}

/**
 * @public
 * <p>A context is a variable that contains information about the current
 *       state of the conversation between a user and Amazon Lex. Context can be set
 *       automatically by Amazon Lex when an intent is fulfilled, or it can be set at
 *       runtime using the <code>PutContent</code>, <code>PutText</code>, or
 *         <code>PutSession</code> operation.</p>
 */
export interface ActiveContext {
  /**
   * <p>The name of the context.</p>
   */
  name: string | undefined;

  /**
   * <p>The length of time or number of turns that a context remains
   *       active.</p>
   */
  timeToLive: ActiveContextTimeToLive | undefined;

  /**
   * <p>State variables for the current context. You can use these values as
   *       default values for slots in subsequent events.</p>
   */
  parameters: Record<string, string> | undefined;
}

/**
 * @public
 * <p> Request validation failed, there is no usable message in the context,
 *       or the bot build failed, is still in progress, or contains unbuilt
 *       changes. </p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * @public
 * <p> Two clients are using the same AWS account, Amazon Lex bot, and user
 *       ID. </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteSessionRequest {
  /**
   * <p>The name of the bot that contains the session data.</p>
   */
  botName: string | undefined;

  /**
   * <p>The alias in use for the bot that contains the session data.</p>
   */
  botAlias: string | undefined;

  /**
   * <p>The identifier of the user associated with the session data.</p>
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionResponse {
  /**
   * <p>The name of the bot associated with the session data.</p>
   */
  botName?: string;

  /**
   * <p>The alias in use for the bot associated with the session data.</p>
   */
  botAlias?: string;

  /**
   * <p>The ID of the client application user.</p>
   */
  userId?: string;

  /**
   * <p>The unique identifier for the session.</p>
   */
  sessionId?: string;
}

/**
 * @public
 * <p>Internal service error. Retry the call.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * @public
 * <p>Exceeded a limit.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  retryAfterSeconds?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>The resource (such as the Amazon Lex bot or an alias) that is referred
 *       to is not found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The name of the bot that contains the session data.</p>
   */
  botName: string | undefined;

  /**
   * <p>The alias in use for the bot that contains the session data.</p>
   */
  botAlias: string | undefined;

  /**
   * <p>The ID of the client application user. Amazon Lex uses this to identify a
   *       user's conversation with your bot. </p>
   */
  userId: string | undefined;

  /**
   * <p>A string used to filter the intents returned in the
   *         <code>recentIntentSummaryView</code> structure. </p>
   *          <p>When you specify a filter, only intents with their
   *         <code>checkpointLabel</code> field set to that string are
   *       returned.</p>
   */
  checkpointLabelFilter?: string;
}

/**
 * @public
 * @enum
 */
export const FulfillmentState = {
  FAILED: "Failed",
  FULFILLED: "Fulfilled",
  READY_FOR_FULFILLMENT: "ReadyForFulfillment",
} as const;

/**
 * @public
 */
export type FulfillmentState = (typeof FulfillmentState)[keyof typeof FulfillmentState];

/**
 * @public
 * @enum
 */
export const MessageFormatType = {
  COMPOSITE: "Composite",
  CUSTOM_PAYLOAD: "CustomPayload",
  PLAIN_TEXT: "PlainText",
  SSML: "SSML",
} as const;

/**
 * @public
 */
export type MessageFormatType = (typeof MessageFormatType)[keyof typeof MessageFormatType];

/**
 * @public
 * @enum
 */
export const DialogActionType = {
  CLOSE: "Close",
  CONFIRM_INTENT: "ConfirmIntent",
  DELEGATE: "Delegate",
  ELICIT_INTENT: "ElicitIntent",
  ELICIT_SLOT: "ElicitSlot",
} as const;

/**
 * @public
 */
export type DialogActionType = (typeof DialogActionType)[keyof typeof DialogActionType];

/**
 * @public
 * <p>Describes the next action that the bot should take in its interaction
 *       with the user and provides information about the context in which the
 *       action takes place. Use the <code>DialogAction</code> data type to set the
 *       interaction to a specific state, or to return the interaction to a
 *       previous state.</p>
 */
export interface DialogAction {
  /**
   * <p>The next action that the bot should take in its interaction with the
   *       user. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConfirmIntent</code> - The next action is asking the user if
   *           the intent is complete and ready to be fulfilled. This is a yes/no
   *           question such as "Place the order?"</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Close</code> - Indicates that the there will not be a
   *           response from the user. For example, the statement "Your order has
   *           been placed" does not require a response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Delegate</code> - The next action is determined by
   *           Amazon Lex.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitIntent</code> - The next action is to determine the
   *           intent that the user wants to fulfill.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitSlot</code> - The next action is to elicit a slot
   *           value from the user.</p>
   *             </li>
   *          </ul>
   */
  type: DialogActionType | string | undefined;

  /**
   * <p>The name of the intent.</p>
   */
  intentName?: string;

  /**
   * <p>Map of the slots that have been gathered and their values. </p>
   */
  slots?: Record<string, string>;

  /**
   * <p>The name of the slot that should be elicited from the user.</p>
   */
  slotToElicit?: string;

  /**
   * <p>The fulfillment state of the intent. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The Lambda function associated with the
   *           intent failed to fulfill the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fulfilled</code> - The intent has fulfilled by the Lambda
   *           function associated with the intent. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReadyForFulfillment</code> - All of the information
   *           necessary for the intent is present and the intent ready to be
   *           fulfilled by the client application.</p>
   *             </li>
   *          </ul>
   */
  fulfillmentState?: FulfillmentState | string;

  /**
   * <p>The message that should be shown to the user. If you don't specify a
   *       message, Amazon Lex will use the message configured for the intent.</p>
   */
  message?: string;

  /**
   * <ul>
   *             <li>
   *                <p>
   *                   <code>PlainText</code> - The message contains plain UTF-8
   *           text.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CustomPayload</code> - The message is a custom format for
   *           the client.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSML</code> - The message contains text formatted for voice
   *           output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Composite</code> - The message contains an escaped JSON
   *           object containing one or more messages. For more information, see
   *             <a href="https://docs.aws.amazon.com/lex/latest/dg/howitworks-manage-prompts.html">Message Groups</a>. </p>
   *             </li>
   *          </ul>
   */
  messageFormat?: MessageFormatType | string;
}

/**
 * @public
 * @enum
 */
export const ConfirmationStatus = {
  CONFIRMED: "Confirmed",
  DENIED: "Denied",
  NONE: "None",
} as const;

/**
 * @public
 */
export type ConfirmationStatus = (typeof ConfirmationStatus)[keyof typeof ConfirmationStatus];

/**
 * @public
 * <p>Provides information about the state of an intent. You can use this
 *       information to get the current state of an intent so that you can process
 *       the intent, or so that you can return the intent to its previous
 *       state.</p>
 */
export interface IntentSummary {
  /**
   * <p>The name of the intent.</p>
   */
  intentName?: string;

  /**
   * <p>A user-defined label that identifies a particular intent. You can use
   *       this label to return to a previous intent. </p>
   *          <p>Use the <code>checkpointLabelFilter</code> parameter of the
   *         <code>GetSessionRequest</code> operation to filter the intents returned
   *       by the operation to those with only the specified label.</p>
   */
  checkpointLabel?: string;

  /**
   * <p>Map of the slots that have been gathered and their values. </p>
   */
  slots?: Record<string, string>;

  /**
   * <p>The status of the intent after the user responds to the confirmation
   *       prompt. If the user confirms the intent, Amazon Lex sets this field to
   *         <code>Confirmed</code>. If the user denies the intent, Amazon Lex sets this
   *       value to <code>Denied</code>. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Confirmed</code> - The user has responded "Yes" to the
   *           confirmation prompt, confirming that the intent is complete and that
   *           it is ready to be fulfilled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Denied</code> - The user has responded "No" to the
   *           confirmation prompt.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>None</code> - The user has never been prompted for
   *           confirmation; or, the user was prompted but did not confirm or deny
   *           the prompt.</p>
   *             </li>
   *          </ul>
   */
  confirmationStatus?: ConfirmationStatus | string;

  /**
   * <p>The next action that the bot should take in its interaction with the
   *       user. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConfirmIntent</code> - The next action is asking the user if
   *           the intent is complete and ready to be fulfilled. This is a yes/no
   *           question such as "Place the order?"</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Close</code> - Indicates that the there will not be a
   *           response from the user. For example, the statement "Your order has
   *           been placed" does not require a response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitIntent</code> - The next action is to determine the
   *           intent that the user wants to fulfill.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitSlot</code> - The next action is to elicit a slot
   *           value from the user.</p>
   *             </li>
   *          </ul>
   */
  dialogActionType: DialogActionType | string | undefined;

  /**
   * <p>The fulfillment state of the intent. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The Lambda function associated with the
   *           intent failed to fulfill the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fulfilled</code> - The intent has fulfilled by the Lambda
   *           function associated with the intent. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReadyForFulfillment</code> - All of the information
   *           necessary for the intent is present and the intent ready to be
   *           fulfilled by the client application.</p>
   *             </li>
   *          </ul>
   */
  fulfillmentState?: FulfillmentState | string;

  /**
   * <p>The next slot to elicit from the user. If there is not slot to elicit,
   *       the field is blank.</p>
   */
  slotToElicit?: string;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>An array of information about the intents used in the session. The
   *       array can contain a maximum of three summaries. If more than three intents
   *       are used in the session, the <code>recentIntentSummaryView</code>
   *       operation contains information about the last three intents used.</p>
   *          <p>If you set the <code>checkpointLabelFilter</code> parameter in the
   *       request, the array contains only the intents with the specified
   *       label.</p>
   */
  recentIntentSummaryView?: IntentSummary[];

  /**
   * <p>Map of key/value pairs representing the session-specific context
   *       information. It contains application information passed between Amazon Lex and
   *       a client application.</p>
   */
  sessionAttributes?: Record<string, string>;

  /**
   * <p>A unique identifier for the session.</p>
   */
  sessionId?: string;

  /**
   * <p>Describes the current state of the bot.</p>
   */
  dialogAction?: DialogAction;

  /**
   * <p>A list of active contexts for the session. A context can be set when
   *       an intent is fulfilled or by calling the <code>PostContent</code>,
   *         <code>PostText</code>, or <code>PutSession</code> operation.</p>
   *          <p>You can use a context to control the intents that can follow up an
   *       intent, or to modify the operation of your application.</p>
   */
  activeContexts?: ActiveContext[];
}

/**
 * @public
 * <p>Either the Amazon Lex bot is still building, or one of the dependent
 *       services (Amazon Polly, AWS Lambda) failed with an internal service
 *       error.</p>
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadGatewayException, __BaseException>) {
    super({
      name: "BadGatewayException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BadGatewayException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> One of the dependencies, such as AWS Lambda or Amazon Polly, threw an
 *       exception. For example, </p>
 *          <ul>
 *             <li>
 *                <p>If Amazon Lex does not have sufficient permissions to call a Lambda
 *           function.</p>
 *             </li>
 *             <li>
 *                <p>If a Lambda function takes longer than 30 seconds to
 *           execute.</p>
 *             </li>
 *             <li>
 *                <p>If a fulfillment Lambda function returns a <code>Delegate</code>
 *           dialog action without removing any slot values.</p>
 *             </li>
 *          </ul>
 */
export class DependencyFailedException extends __BaseException {
  readonly name: "DependencyFailedException" = "DependencyFailedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailedException, __BaseException>) {
    super({
      name: "DependencyFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is not used.</p>
 */
export class LoopDetectedException extends __BaseException {
  readonly name: "LoopDetectedException" = "LoopDetectedException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LoopDetectedException, __BaseException>) {
    super({
      name: "LoopDetectedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, LoopDetectedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The accept header in the request does not have a valid value.</p>
 */
export class NotAcceptableException extends __BaseException {
  readonly name: "NotAcceptableException" = "NotAcceptableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAcceptableException, __BaseException>) {
    super({
      name: "NotAcceptableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAcceptableException.prototype);
  }
}

/**
 * @public
 */
export interface PostContentRequest {
  /**
   * <p>Name of the Amazon Lex bot.</p>
   */
  botName: string | undefined;

  /**
   * <p>Alias of the Amazon Lex bot.</p>
   */
  botAlias: string | undefined;

  /**
   * <p>The ID of the client application user. Amazon Lex uses this to identify a
   *       user's conversation with your bot. At runtime, each request must contain
   *       the <code>userID</code> field.</p>
   *          <p>To decide the user ID to use for your application, consider the
   *       following factors.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>userID</code> field must not contain any personally
   *           identifiable information of the user, for example, name, personal
   *           identification numbers, or other end user personal information.</p>
   *             </li>
   *             <li>
   *                <p>If you want a user to start a conversation on one device and
   *           continue on another device, use a user-specific identifier.</p>
   *             </li>
   *             <li>
   *                <p>If you want the same user to be able to have two independent
   *           conversations on two different devices, choose a device-specific
   *           identifier.</p>
   *             </li>
   *             <li>
   *                <p>A user can't have two independent conversations with two different
   *           versions of the same bot. For example, a user can't have a
   *           conversation with the PROD and BETA versions of the same bot. If you
   *           anticipate that a user will need to have conversation with two
   *           different versions, for example, while testing, include the bot alias
   *           in the user ID to separate the two conversations.</p>
   *             </li>
   *          </ul>
   */
  userId: string | undefined;

  /**
   * <p>You pass this value as the <code>x-amz-lex-session-attributes</code>
   *       HTTP header.</p>
   *          <p>Application-specific information passed between Amazon Lex and a client
   *       application. The value must be a JSON serialized and base64 encoded map
   *       with string keys and values. The total size of the
   *         <code>sessionAttributes</code> and <code>requestAttributes</code>
   *       headers is limited to 12 KB.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p>
   */
  sessionAttributes?: __LazyJsonString | string;

  /**
   * <p>You pass this value as the <code>x-amz-lex-request-attributes</code>
   *       HTTP header.</p>
   *          <p>Request-specific information passed between Amazon Lex and a client
   *       application. The value must be a JSON serialized and base64 encoded map
   *       with string keys and values. The total size of the
   *         <code>requestAttributes</code> and <code>sessionAttributes</code>
   *       headers is limited to 12 KB.</p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *       attributes. Don't create any request attributes with the prefix
   *         <code>x-amz-lex:</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p>
   */
  requestAttributes?: __LazyJsonString | string;

  /**
   * <p> You pass this value as the <code>Content-Type</code> HTTP header. </p>
   *          <p> Indicates the audio format or text. The header value must start with
   *       one of the following prefixes: </p>
   *          <ul>
   *             <li>
   *                <p>PCM format, audio data must be in little-endian byte order.</p>
   *                <ul>
   *                   <li>
   *                      <p>audio/l16; rate=16000; channels=1</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/x-l16; sample-rate=16000; channel-count=1</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/lpcm; sample-rate=8000; sample-size-bits=16;
   *               channel-count=1; is-big-endian=false </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Opus format</p>
   *                <ul>
   *                   <li>
   *                      <p>audio/x-cbr-opus-with-preamble; preamble-size=0;
   *               bit-rate=256000; frame-size-milliseconds=4</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Text format</p>
   *                <ul>
   *                   <li>
   *                      <p>text/plain; charset=utf-8</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  contentType: string | undefined;

  /**
   * <p> You pass this value as the <code>Accept</code> HTTP header. </p>
   *          <p> The message Amazon Lex returns in the response can be either text or
   *       speech based on the <code>Accept</code> HTTP header value in the request. </p>
   *          <ul>
   *             <li>
   *                <p> If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex
   *           returns text in the response. </p>
   *             </li>
   *             <li>
   *                <p> If the value begins with <code>audio/</code>, Amazon Lex returns
   *           speech in the response. Amazon Lex uses Amazon Polly to generate the speech
   *           (using the configuration you specified in the <code>Accept</code>
   *           header). For example, if you specify <code>audio/mpeg</code> as the
   *           value, Amazon Lex returns speech in the MPEG format.</p>
   *             </li>
   *             <li>
   *                <p>If the value is <code>audio/pcm</code>, the speech returned is
   *             <code>audio/pcm</code> in 16-bit, little endian format.
   *           </p>
   *             </li>
   *             <li>
   *                <p>The following are the accepted values:</p>
   *                <ul>
   *                   <li>
   *                      <p>audio/mpeg</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/ogg</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/pcm</p>
   *                   </li>
   *                   <li>
   *                      <p>text/plain; charset=utf-8</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/* (defaults to mpeg)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  accept?: string;

  /**
   * <p> User input in PCM or Opus audio format or text format as described in
   *       the <code>Content-Type</code> HTTP header. </p>
   *          <p>You can stream audio data to Amazon Lex or you can create a local buffer
   *       that captures all of the audio data before sending. In general, you get
   *       better performance if you stream audio data rather than buffering the data
   *       locally.</p>
   */
  inputStream: Readable | ReadableStream | Blob | undefined;

  /**
   * <p>A list of contexts active for the request. A context can be activated
   *       when a previous intent is fulfilled, or by including the context in the
   *       request,</p>
   *          <p>If you don't specify a list of contexts, Amazon Lex will use the current
   *       list of contexts for the session. If you specify an empty list, all
   *       contexts for the session are cleared.</p>
   */
  activeContexts?: __LazyJsonString | string;
}

/**
 * @public
 * @enum
 */
export const DialogState = {
  CONFIRM_INTENT: "ConfirmIntent",
  ELICIT_INTENT: "ElicitIntent",
  ELICIT_SLOT: "ElicitSlot",
  FAILED: "Failed",
  FULFILLED: "Fulfilled",
  READY_FOR_FULFILLMENT: "ReadyForFulfillment",
} as const;

/**
 * @public
 */
export type DialogState = (typeof DialogState)[keyof typeof DialogState];

/**
 * @public
 */
export interface PostContentResponse {
  /**
   * <p>Content type as specified in the <code>Accept</code> HTTP header in
   *       the request.</p>
   */
  contentType?: string;

  /**
   * <p>Current user intent that Amazon Lex is aware of.</p>
   */
  intentName?: string;

  /**
   * <p>Provides a score that indicates how confident Amazon Lex is that the
   *       returned intent is the one that matches the user's intent. The score is
   *       between 0.0 and 1.0.</p>
   *          <p>The score is a relative score, not an absolute score. The score may
   *       change based on improvements to Amazon Lex. </p>
   */
  nluIntentConfidence?: __LazyJsonString | string;

  /**
   * <p>One to four alternative intents that may be applicable to the user's
   *       intent.</p>
   *          <p>Each alternative includes a score that indicates how confident Amazon Lex
   *       is that the intent matches the user's intent. The intents are sorted by
   *       the confidence score.</p>
   */
  alternativeIntents?: __LazyJsonString | string;

  /**
   * <p>Map of zero or more intent slots (name/value pairs) Amazon Lex detected
   *       from the user input during the conversation. The field is base-64
   *       encoded.</p>
   *          <p>Amazon Lex creates a resolution list containing likely values for a slot.
   *       The value that it returns is determined by the
   *         <code>valueSelectionStrategy</code> selected when the slot type was
   *       created or updated. If <code>valueSelectionStrategy</code> is set to
   *         <code>ORIGINAL_VALUE</code>, the value provided by the user is returned,
   *       if the user value is similar to the slot values. If
   *         <code>valueSelectionStrategy</code> is set to
   *         <code>TOP_RESOLUTION</code> Amazon Lex returns the first value in the
   *       resolution list or, if there is no resolution list, null. If you don't
   *       specify a <code>valueSelectionStrategy</code>, the default is
   *         <code>ORIGINAL_VALUE</code>.</p>
   */
  slots?: __LazyJsonString | string;

  /**
   * <p> Map of key/value pairs representing the session-specific context
   *       information. </p>
   */
  sessionAttributes?: __LazyJsonString | string;

  /**
   * <p>The sentiment expressed in an utterance.</p>
   *          <p>When the bot is configured to send utterances to Amazon Comprehend for
   *       sentiment analysis, this field contains the result of the analysis.</p>
   */
  sentimentResponse?: string;

  /**
   * @deprecated
   *
   * <p>You can only use this field in the de-DE, en-AU, en-GB, en-US, es-419,
   *       es-ES, es-US, fr-CA, fr-FR, and it-IT locales. In all other locales, the
   *         <code>message</code> field is null. You should use the
   *         <code>encodedMessage</code> field instead.</p>
   *          <p>The message to convey to the user. The message can come from the bot's
   *       configuration or from a Lambda function.</p>
   *          <p>If the intent is not configured with a Lambda function, or if the Lambda
   *       function returned <code>Delegate</code> as the
   *         <code>dialogAction.type</code> in its response, Amazon Lex decides on the
   *       next course of action and selects an appropriate message from the bot's
   *       configuration based on the current interaction context. For example, if
   *       Amazon Lex isn't able to understand user input, it uses a clarification prompt
   *       message.</p>
   *          <p>When you create an intent you can assign messages to groups. When
   *       messages are assigned to groups Amazon Lex returns one message from each group
   *       in the response. The message field is an escaped JSON string containing
   *       the messages. For more information about the structure of the JSON string
   *       returned, see <a>msg-prompts-formats</a>.</p>
   *          <p>If the Lambda function returns a message, Amazon Lex passes it to the client
   *       in its response.</p>
   */
  message?: string;

  /**
   * <p>The message to convey to the user. The message can come from the bot's
   *       configuration or from a Lambda function.</p>
   *          <p>If the intent is not configured with a Lambda function, or if the Lambda
   *       function returned <code>Delegate</code> as the
   *         <code>dialogAction.type</code> in its response, Amazon Lex decides on the
   *       next course of action and selects an appropriate message from the bot's
   *       configuration based on the current interaction context. For example, if
   *       Amazon Lex isn't able to understand user input, it uses a clarification prompt
   *       message.</p>
   *          <p>When you create an intent you can assign messages to groups. When
   *       messages are assigned to groups Amazon Lex returns one message from each group
   *       in the response. The message field is an escaped JSON string containing
   *       the messages. For more information about the structure of the JSON string
   *       returned, see <a>msg-prompts-formats</a>.</p>
   *          <p>If the Lambda function returns a message, Amazon Lex passes it to the client
   *       in its response.</p>
   *          <p>The <code>encodedMessage</code> field is base-64 encoded. You must
   *       decode the field before you can use the value.</p>
   */
  encodedMessage?: string;

  /**
   * <p>The format of the response message. One of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PlainText</code> - The message contains plain UTF-8
   *           text.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CustomPayload</code> - The message is a custom format for
   *           the client.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSML</code> - The message contains text formatted for voice
   *           output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Composite</code> - The message contains an escaped JSON
   *           object containing one or more messages from the groups that messages
   *           were assigned to when the intent was created.</p>
   *             </li>
   *          </ul>
   */
  messageFormat?: MessageFormatType | string;

  /**
   * <p>Identifies the current state of the user interaction. Amazon Lex returns
   *       one of the following values as <code>dialogState</code>. The client can
   *       optionally use this information to customize the user interface. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ElicitIntent</code> - Amazon Lex wants to elicit the user's intent.
   *           Consider the following examples: </p>
   *                <p> For example, a user might utter an intent ("I want to order a
   *           pizza"). If Amazon Lex cannot infer the user intent from this utterance, it
   *           will return this dialog state. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConfirmIntent</code> - Amazon Lex is expecting a "yes" or "no"
   *           response. </p>
   *                <p>For example, Amazon Lex wants user confirmation before fulfilling an
   *           intent. Instead of a simple "yes" or "no" response, a user might
   *           respond with additional information. For example, "yes, but make it a
   *           thick crust pizza" or "no, I want to order a drink." Amazon Lex can process
   *           such additional information (in these examples, update the crust type
   *           slot or change the intent from OrderPizza to OrderDrink). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitSlot</code> - Amazon Lex is expecting the value of a slot for
   *           the current intent. </p>
   *                <p> For example, suppose that in the response Amazon Lex sends this
   *           message: "What size pizza would you like?". A user might reply with
   *           the slot value (e.g., "medium"). The user might also provide
   *           additional information in the response (e.g., "medium thick crust
   *           pizza"). Amazon Lex can process such additional information appropriately.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fulfilled</code> - Conveys that the Lambda function has
   *           successfully fulfilled the intent. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReadyForFulfillment</code> - Conveys that the client has to
   *           fulfill the request. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - Conveys that the conversation with the user
   *           failed. </p>
   *                <p> This can happen for various reasons, including that the user does
   *           not provide an appropriate response to prompts from the service (you
   *           can configure how many times Amazon Lex can prompt a user for specific
   *           information), or if the Lambda function fails to fulfill the intent.
   *         </p>
   *             </li>
   *          </ul>
   */
  dialogState?: DialogState | string;

  /**
   * <p> If the <code>dialogState</code> value is <code>ElicitSlot</code>,
   *       returns the name of the slot for which Amazon Lex is eliciting a value. </p>
   */
  slotToElicit?: string;

  /**
   * @deprecated
   *
   * <p>The text used to process the request.</p>
   *          <p>You can use this field only in the de-DE, en-AU, en-GB, en-US, es-419,
   *       es-ES, es-US, fr-CA, fr-FR, and it-IT locales. In all other locales, the
   *         <code>inputTranscript</code> field is null. You should use the
   *         <code>encodedInputTranscript</code> field instead.</p>
   *          <p>If the input was an audio stream, the <code>inputTranscript</code>
   *       field contains the text extracted from the audio stream. This is the text
   *       that is actually processed to recognize intents and slot values. You can
   *       use this information to determine if Amazon Lex is correctly processing the
   *       audio that you send.</p>
   */
  inputTranscript?: string;

  /**
   * <p>The text used to process the request.</p>
   *          <p>If the input was an audio stream, the
   *         <code>encodedInputTranscript</code> field contains the text extracted
   *       from the audio stream. This is the text that is actually processed to
   *       recognize intents and slot values. You can use this information to
   *       determine if Amazon Lex is correctly processing the audio that you send.</p>
   *          <p>The <code>encodedInputTranscript</code> field is base-64 encoded. You must
   *       decode the field before you can use the value.</p>
   */
  encodedInputTranscript?: string;

  /**
   * <p>The prompt (or statement) to convey to the user. This is based on the
   *       bot configuration and context. For example, if Amazon Lex did not understand
   *       the user intent, it sends the <code>clarificationPrompt</code> configured
   *       for the bot. If the intent requires confirmation before taking the
   *       fulfillment action, it sends the <code>confirmationPrompt</code>. Another
   *       example: Suppose that the Lambda function successfully fulfilled the
   *       intent, and sent a message to convey to the user. Then Amazon Lex sends that
   *       message in the response. </p>
   */
  audioStream?: Readable | ReadableStream | Blob;

  /**
   * <p>The version of the bot that responded to the conversation. You can use
   *       this information to help determine if one version of a bot is performing
   *       better than another version.</p>
   */
  botVersion?: string;

  /**
   * <p>The unique identifier for the session.</p>
   */
  sessionId?: string;

  /**
   * <p>A list of active contexts for the session. A context can be set when
   *       an intent is fulfilled or by calling the <code>PostContent</code>,
   *         <code>PostText</code>, or <code>PutSession</code> operation.</p>
   *          <p>You can use a context to control the intents that can follow up an
   *       intent, or to modify the operation of your application.</p>
   */
  activeContexts?: __LazyJsonString | string;
}

/**
 * @public
 * <p>The input speech is too long.</p>
 */
export class RequestTimeoutException extends __BaseException {
  readonly name: "RequestTimeoutException" = "RequestTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
  }
}

/**
 * @public
 * <p>The Content-Type header (<code>PostContent</code> API) has an invalid
 *       value. </p>
 */
export class UnsupportedMediaTypeException extends __BaseException {
  readonly name: "UnsupportedMediaTypeException" = "UnsupportedMediaTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedMediaTypeException, __BaseException>) {
    super({
      name: "UnsupportedMediaTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedMediaTypeException.prototype);
  }
}

/**
 * @public
 */
export interface PostTextRequest {
  /**
   * <p>The name of the Amazon Lex bot.</p>
   */
  botName: string | undefined;

  /**
   * <p>The alias of the Amazon Lex bot.</p>
   */
  botAlias: string | undefined;

  /**
   * <p>The ID of the client application user. Amazon Lex uses this to identify a
   *       user's conversation with your bot. At runtime, each request must contain
   *       the <code>userID</code> field.</p>
   *          <p>To decide the user ID to use for your application, consider the
   *       following factors.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>userID</code> field must not contain any personally
   *           identifiable information of the user, for example, name, personal
   *           identification numbers, or other end user personal information.</p>
   *             </li>
   *             <li>
   *                <p>If you want a user to start a conversation on one device and
   *           continue on another device, use a user-specific identifier.</p>
   *             </li>
   *             <li>
   *                <p>If you want the same user to be able to have two independent
   *           conversations on two different devices, choose a device-specific
   *           identifier.</p>
   *             </li>
   *             <li>
   *                <p>A user can't have two independent conversations with two different
   *           versions of the same bot. For example, a user can't have a
   *           conversation with the PROD and BETA versions of the same bot. If you
   *           anticipate that a user will need to have conversation with two
   *           different versions, for example, while testing, include the bot alias
   *           in the user ID to separate the two conversations.</p>
   *             </li>
   *          </ul>
   */
  userId: string | undefined;

  /**
   * <p>Application-specific information passed between Amazon Lex and a client
   *       application.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p>
   */
  sessionAttributes?: Record<string, string>;

  /**
   * <p>Request-specific information passed between Amazon Lex and a client
   *       application.</p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *       attributes. Don't create any request attributes with the prefix
   *         <code>x-amz-lex:</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p>
   */
  requestAttributes?: Record<string, string>;

  /**
   * <p>The text that the user entered (Amazon Lex interprets this text).</p>
   */
  inputText: string | undefined;

  /**
   * <p>A list of contexts active for the request. A context can be activated
   *       when a previous intent is fulfilled, or by including the context in the
   *       request,</p>
   *          <p>If you don't specify a list of contexts, Amazon Lex will use the current
   *       list of contexts for the session. If you specify an empty list, all
   *       contexts for the session are cleared.</p>
   */
  activeContexts?: ActiveContext[];
}

/**
 * @public
 * <p>Provides a score that indicates the confidence that Amazon Lex has that an
 *       intent is the one that satisfies the user's intent.</p>
 */
export interface IntentConfidence {
  /**
   * <p>A score that indicates how confident Amazon Lex is that an intent satisfies
   *       the user's intent. Ranges between 0.00 and 1.00. Higher scores indicate
   *       higher confidence.</p>
   */
  score?: number;
}

/**
 * @public
 * <p>An intent that Amazon Lex suggests satisfies the user's intent. Includes
 *       the name of the intent, the confidence that Amazon Lex has that the user's
 *       intent is satisfied, and the slots defined for the intent.</p>
 */
export interface PredictedIntent {
  /**
   * <p>The name of the intent that Amazon Lex suggests satisfies the user's
   *       intent.</p>
   */
  intentName?: string;

  /**
   * <p>Indicates how confident Amazon Lex is that an intent satisfies the user's
   *       intent.</p>
   */
  nluIntentConfidence?: IntentConfidence;

  /**
   * <p>The slot and slot values associated with the predicted intent.</p>
   */
  slots?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ContentType = {
  GENERIC: "application/vnd.amazonaws.card.generic",
} as const;

/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * @public
 * <p>Represents an option to be shown on the client platform (Facebook,
 *       Slack, etc.)</p>
 */
export interface Button {
  /**
   * <p>Text that is visible to the user on the button.</p>
   */
  text: string | undefined;

  /**
   * <p>The value sent to Amazon Lex when a user chooses the button. For
   *       example, consider button text "NYC." When the user chooses the button, the
   *       value sent can be "New York City."</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Represents an option rendered to the user when a prompt is shown. It
 *       could be an image, a button, a link, or text. </p>
 */
export interface GenericAttachment {
  /**
   * <p>The title of the option.</p>
   */
  title?: string;

  /**
   * <p>The subtitle shown below the title.</p>
   */
  subTitle?: string;

  /**
   * <p>The URL of an attachment to the response card.</p>
   */
  attachmentLinkUrl?: string;

  /**
   * <p>The URL of an image that is displayed to the user.</p>
   */
  imageUrl?: string;

  /**
   * <p>The list of options to show to the user.</p>
   */
  buttons?: Button[];
}

/**
 * @public
 * <p>If you configure a response card when creating your bots, Amazon Lex
 *       substitutes the session attributes and slot values that are available, and
 *       then returns it. The response card can also come from a Lambda function (
 *         <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an
 *       intent).</p>
 */
export interface ResponseCard {
  /**
   * <p>The version of the response card format.</p>
   */
  version?: string;

  /**
   * <p>The content type of the response.</p>
   */
  contentType?: ContentType | string;

  /**
   * <p>An array of attachment objects representing options.</p>
   */
  genericAttachments?: GenericAttachment[];
}

/**
 * @public
 * <p>The sentiment expressed in an utterance.</p>
 *          <p>When the bot is configured to send utterances to Amazon Comprehend for
 *       sentiment analysis, this field structure contains the result of the
 *       analysis.</p>
 */
export interface SentimentResponse {
  /**
   * <p>The inferred sentiment that Amazon Comprehend has the highest
   *       confidence in.</p>
   */
  sentimentLabel?: string;

  /**
   * <p>The likelihood that the sentiment was correctly inferred.</p>
   */
  sentimentScore?: string;
}

/**
 * @public
 */
export interface PostTextResponse {
  /**
   * <p>The current user intent that Amazon Lex is aware of.</p>
   */
  intentName?: string;

  /**
   * <p>Provides a score that indicates how confident Amazon Lex is that the
   *       returned intent is the one that matches the user's intent. The score is
   *       between 0.0 and 1.0. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html">Confidence Scores</a>.</p>
   *          <p>The score is a relative score, not an absolute score. The score may
   *       change based on improvements to Amazon Lex.</p>
   */
  nluIntentConfidence?: IntentConfidence;

  /**
   * <p>One to four alternative intents that may be applicable to the user's
   *       intent.</p>
   *          <p>Each alternative includes a score that indicates how confident Amazon Lex
   *       is that the intent matches the user's intent. The intents are sorted by
   *       the confidence score.</p>
   */
  alternativeIntents?: PredictedIntent[];

  /**
   * <p> The intent slots that Amazon Lex detected from the user input in the
   *       conversation. </p>
   *          <p>Amazon Lex creates a resolution list containing likely values for a slot.
   *       The value that it returns is determined by the
   *         <code>valueSelectionStrategy</code> selected when the slot type was
   *       created or updated. If <code>valueSelectionStrategy</code> is set to
   *         <code>ORIGINAL_VALUE</code>, the value provided by the user is returned,
   *       if the user value is similar to the slot values. If
   *         <code>valueSelectionStrategy</code> is set to
   *         <code>TOP_RESOLUTION</code> Amazon Lex returns the first value in the
   *       resolution list or, if there is no resolution list, null. If you don't
   *       specify a <code>valueSelectionStrategy</code>, the default is
   *         <code>ORIGINAL_VALUE</code>.</p>
   */
  slots?: Record<string, string>;

  /**
   * <p>A map of key-value pairs representing the session-specific context
   *       information.</p>
   */
  sessionAttributes?: Record<string, string>;

  /**
   * <p>The message to convey to the user. The message can come from the bot's
   *       configuration or from a Lambda function.</p>
   *          <p>If the intent is not configured with a Lambda function, or if the Lambda
   *       function returned <code>Delegate</code> as the
   *         <code>dialogAction.type</code> its response, Amazon Lex decides on the next
   *       course of action and selects an appropriate message from the bot's
   *       configuration based on the current interaction context. For example, if
   *       Amazon Lex isn't able to understand user input, it uses a clarification prompt
   *       message.</p>
   *          <p>When you create an intent you can assign messages to groups. When
   *       messages are assigned to groups Amazon Lex returns one message from each group
   *       in the response. The message field is an escaped JSON string containing
   *       the messages. For more information about the structure of the JSON string
   *       returned, see <a>msg-prompts-formats</a>.</p>
   *          <p>If the Lambda function returns a message, Amazon Lex passes it to the client
   *       in its response.</p>
   */
  message?: string;

  /**
   * <p>The sentiment expressed in and utterance.</p>
   *          <p>When the bot is configured to send utterances to Amazon Comprehend for
   *       sentiment analysis, this field contains the result of the analysis.</p>
   */
  sentimentResponse?: SentimentResponse;

  /**
   * <p>The format of the response message. One of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PlainText</code> - The message contains plain UTF-8
   *           text.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CustomPayload</code> - The message is a custom format
   *           defined by the Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSML</code> - The message contains text formatted for voice
   *           output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Composite</code> - The message contains an escaped JSON
   *           object containing one or more messages from the groups that messages
   *           were assigned to when the intent was created.</p>
   *             </li>
   *          </ul>
   */
  messageFormat?: MessageFormatType | string;

  /**
   * <p> Identifies the current state of the user interaction. Amazon Lex returns
   *       one of the following values as <code>dialogState</code>. The client can
   *       optionally use this information to customize the user interface. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ElicitIntent</code> - Amazon Lex wants to elicit user intent. </p>
   *                <p>For example, a user might utter an intent ("I want to order a
   *           pizza"). If Amazon Lex cannot infer the user intent from this utterance, it
   *           will return this dialogState.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConfirmIntent</code> - Amazon Lex is expecting a "yes" or "no"
   *           response. </p>
   *                <p> For example, Amazon Lex wants user confirmation before fulfilling an
   *           intent. </p>
   *                <p>Instead of a simple "yes" or "no," a user might respond with
   *           additional information. For example, "yes, but make it thick crust
   *           pizza" or "no, I want to order a drink". Amazon Lex can process such
   *           additional information (in these examples, update the crust type slot
   *           value, or change intent from OrderPizza to OrderDrink).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitSlot</code> - Amazon Lex is expecting a slot value for the
   *           current intent. </p>
   *                <p>For example, suppose that in the response Amazon Lex sends this
   *           message: "What size pizza would you like?". A user might reply with
   *           the slot value (e.g., "medium"). The user might also provide
   *           additional information in the response (e.g., "medium thick crust
   *           pizza"). Amazon Lex can process such additional information appropriately.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fulfilled</code> - Conveys that the Lambda function configured
   *           for the intent has successfully fulfilled the intent. </p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReadyForFulfillment</code> - Conveys that the client has to
   *           fulfill the intent. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - Conveys that the conversation with the user
   *           failed. </p>
   *                <p> This can happen for various reasons including that the user did
   *           not provide an appropriate response to prompts from the service (you
   *           can configure how many times Amazon Lex can prompt a user for specific
   *           information), or the Lambda function failed to fulfill the intent.
   *         </p>
   *             </li>
   *          </ul>
   */
  dialogState?: DialogState | string;

  /**
   * <p>If the <code>dialogState</code> value is <code>ElicitSlot</code>,
   *       returns the name of the slot for which Amazon Lex is eliciting a value. </p>
   */
  slotToElicit?: string;

  /**
   * <p>Represents the options that the user has to respond to the current
   *       prompt. Response Card can come from the bot configuration (in the
   *       Amazon Lex console, choose the settings button next to a slot) or from a
   *       code hook (Lambda function). </p>
   */
  responseCard?: ResponseCard;

  /**
   * <p>A unique identifier for the session.</p>
   */
  sessionId?: string;

  /**
   * <p>The version of the bot that responded to the conversation. You can use
   *       this information to help determine if one version of a bot is performing
   *       better than another version.</p>
   */
  botVersion?: string;

  /**
   * <p>A list of active contexts for the session. A context can be set when
   *       an intent is fulfilled or by calling the <code>PostContent</code>,
   *         <code>PostText</code>, or <code>PutSession</code> operation.</p>
   *          <p>You can use a context to control the intents that can follow up an
   *       intent, or to modify the operation of your application.</p>
   */
  activeContexts?: ActiveContext[];
}

/**
 * @public
 */
export interface PutSessionRequest {
  /**
   * <p>The name of the bot that contains the session data.</p>
   */
  botName: string | undefined;

  /**
   * <p>The alias in use for the bot that contains the session data.</p>
   */
  botAlias: string | undefined;

  /**
   * <p>The ID of the client application user. Amazon Lex uses this to identify a
   *       user's conversation with your bot. </p>
   */
  userId: string | undefined;

  /**
   * <p>Map of key/value pairs representing the session-specific context
   *       information. It contains application information passed between Amazon Lex and
   *       a client application.</p>
   */
  sessionAttributes?: Record<string, string>;

  /**
   * <p>Sets the next action that the bot should take to fulfill the
   *       conversation.</p>
   */
  dialogAction?: DialogAction;

  /**
   * <p>A summary of the recent intents for the bot. You can use the intent
   *       summary view to set a checkpoint label on an intent and modify attributes
   *       of intents. You can also use it to remove or add intent summary objects to
   *       the list.</p>
   *          <p>An intent that you modify or add to the list must make sense for the
   *       bot. For example, the intent name must be valid for the bot. You must
   *       provide valid values for:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>intentName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>slot names</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>slotToElict</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you send the <code>recentIntentSummaryView</code> parameter in a
   *         <code>PutSession</code> request, the contents of the new summary view
   *       replaces the old summary view. For example, if a <code>GetSession</code>
   *       request returns three intents in the summary view and you call
   *         <code>PutSession</code> with one intent in the summary view, the next
   *       call to <code>GetSession</code> will only return one intent.</p>
   */
  recentIntentSummaryView?: IntentSummary[];

  /**
   * <p>The message that Amazon Lex returns in the response can be either text or
   *       speech based depending on the value of this field.</p>
   *          <ul>
   *             <li>
   *                <p>If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex
   *           returns text in the response.</p>
   *             </li>
   *             <li>
   *                <p>If the value begins with <code>audio/</code>, Amazon Lex returns speech
   *           in the response. Amazon Lex uses Amazon Polly to generate the speech in the
   *           configuration that you specify. For example, if you specify
   *             <code>audio/mpeg</code> as the value, Amazon Lex returns speech in the
   *           MPEG format.</p>
   *             </li>
   *             <li>
   *                <p>If the value is <code>audio/pcm</code>, the speech is returned as
   *             <code>audio/pcm</code> in 16-bit, little endian format.</p>
   *             </li>
   *             <li>
   *                <p>The following are the accepted values:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>audio/mpeg</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>audio/ogg</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>audio/pcm</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>audio/*</code> (defaults to mpeg)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>text/plain; charset=utf-8</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  accept?: string;

  /**
   * <p>A list of contexts active for the request. A context can be activated
   *       when a previous intent is fulfilled, or by including the context in the
   *       request,</p>
   *          <p>If you don't specify a list of contexts, Amazon Lex will use the current
   *       list of contexts for the session. If you specify an empty list, all
   *       contexts for the session are cleared.</p>
   */
  activeContexts?: ActiveContext[];
}

/**
 * @public
 */
export interface PutSessionResponse {
  /**
   * <p>Content type as specified in the <code>Accept</code> HTTP header in
   *       the request.</p>
   */
  contentType?: string;

  /**
   * <p>The name of the current intent.</p>
   */
  intentName?: string;

  /**
   * <p>Map of zero or more intent slots Amazon Lex detected from the user input
   *       during the conversation.</p>
   *          <p>Amazon Lex creates a resolution list containing likely values for a slot.
   *       The value that it returns is determined by the
   *         <code>valueSelectionStrategy</code> selected when the slot type was
   *       created or updated. If <code>valueSelectionStrategy</code> is set to
   *         <code>ORIGINAL_VALUE</code>, the value provided by the user is returned,
   *       if the user value is similar to the slot values. If
   *         <code>valueSelectionStrategy</code> is set to
   *         <code>TOP_RESOLUTION</code> Amazon Lex returns the first value in the
   *       resolution list or, if there is no resolution list, null. If you don't
   *       specify a <code>valueSelectionStrategy</code> the default is
   *         <code>ORIGINAL_VALUE</code>. </p>
   */
  slots?: __LazyJsonString | string;

  /**
   * <p>Map of key/value pairs representing session-specific context
   *       information.</p>
   */
  sessionAttributes?: __LazyJsonString | string;

  /**
   * @deprecated
   *
   * <p>The next message that should be presented to the user.</p>
   *          <p>You can only use this field in the de-DE, en-AU, en-GB, en-US, es-419,
   *       es-ES, es-US, fr-CA, fr-FR, and it-IT locales. In all other locales, the
   *         <code>message</code> field is null. You should use the
   *         <code>encodedMessage</code> field instead.</p>
   */
  message?: string;

  /**
   * <p>The next message that should be presented to the user.</p>
   *          <p>The <code>encodedMessage</code> field is base-64 encoded. You must
   *       decode the field before you can use the value.</p>
   */
  encodedMessage?: string;

  /**
   * <p>The format of the response message. One of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PlainText</code> - The message contains plain UTF-8
   *           text.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CustomPayload</code> - The message is a custom format for
   *           the client.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSML</code> - The message contains text formatted for voice
   *           output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Composite</code> - The message contains an escaped JSON
   *           object containing one or more messages from the groups that messages
   *           were assigned to when the intent was created.</p>
   *             </li>
   *          </ul>
   */
  messageFormat?: MessageFormatType | string;

  /**
   * <p></p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConfirmIntent</code> - Amazon Lex is expecting a "yes" or "no"
   *           response to confirm the intent before fulfilling an intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitIntent</code> - Amazon Lex wants to elicit the user's
   *           intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitSlot</code> - Amazon Lex is expecting the value of a slot
   *           for the current intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - Conveys that the conversation with the user
   *           has failed. This can happen for various reasons, including the user
   *           does not provide an appropriate response to prompts from the service,
   *           or if the Lambda function fails to fulfill the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fulfilled</code> - Conveys that the Lambda function has
   *           sucessfully fulfilled the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReadyForFulfillment</code> - Conveys that the client has to
   *           fulfill the intent.</p>
   *             </li>
   *          </ul>
   */
  dialogState?: DialogState | string;

  /**
   * <p>If the <code>dialogState</code> is <code>ElicitSlot</code>, returns
   *       the name of the slot for which Amazon Lex is eliciting a value.</p>
   */
  slotToElicit?: string;

  /**
   * <p>The audio version of the message to convey to the user.</p>
   */
  audioStream?: Readable | ReadableStream | Blob;

  /**
   * <p>A unique identifier for the session.</p>
   */
  sessionId?: string;

  /**
   * <p>A list of active contexts for the session.</p>
   */
  activeContexts?: __LazyJsonString | string;
}

/**
 * @internal
 */
export const ActiveContextFilterSensitiveLog = (obj: ActiveContext): any => ({
  ...obj,
  ...(obj.parameters && { parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DialogActionFilterSensitiveLog = (obj: DialogAction): any => ({
  ...obj,
  ...(obj.slots && { slots: SENSITIVE_STRING }),
  ...(obj.message && { message: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IntentSummaryFilterSensitiveLog = (obj: IntentSummary): any => ({
  ...obj,
  ...(obj.slots && { slots: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSessionResponseFilterSensitiveLog = (obj: GetSessionResponse): any => ({
  ...obj,
  ...(obj.recentIntentSummaryView && {
    recentIntentSummaryView: obj.recentIntentSummaryView.map((item) => IntentSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING }),
  ...(obj.dialogAction && { dialogAction: DialogActionFilterSensitiveLog(obj.dialogAction) }),
  ...(obj.activeContexts && { activeContexts: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostContentRequestFilterSensitiveLog = (obj: PostContentRequest): any => ({
  ...obj,
  ...(obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING }),
  ...(obj.requestAttributes && { requestAttributes: SENSITIVE_STRING }),
  ...(obj.activeContexts && { activeContexts: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostContentResponseFilterSensitiveLog = (obj: PostContentResponse): any => ({
  ...obj,
  ...(obj.message && { message: SENSITIVE_STRING }),
  ...(obj.encodedMessage && { encodedMessage: SENSITIVE_STRING }),
  ...(obj.encodedInputTranscript && { encodedInputTranscript: SENSITIVE_STRING }),
  ...(obj.activeContexts && { activeContexts: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostTextRequestFilterSensitiveLog = (obj: PostTextRequest): any => ({
  ...obj,
  ...(obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING }),
  ...(obj.requestAttributes && { requestAttributes: SENSITIVE_STRING }),
  ...(obj.inputText && { inputText: SENSITIVE_STRING }),
  ...(obj.activeContexts && { activeContexts: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PredictedIntentFilterSensitiveLog = (obj: PredictedIntent): any => ({
  ...obj,
  ...(obj.slots && { slots: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostTextResponseFilterSensitiveLog = (obj: PostTextResponse): any => ({
  ...obj,
  ...(obj.alternativeIntents && {
    alternativeIntents: obj.alternativeIntents.map((item) => PredictedIntentFilterSensitiveLog(item)),
  }),
  ...(obj.slots && { slots: SENSITIVE_STRING }),
  ...(obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING }),
  ...(obj.message && { message: SENSITIVE_STRING }),
  ...(obj.activeContexts && { activeContexts: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutSessionRequestFilterSensitiveLog = (obj: PutSessionRequest): any => ({
  ...obj,
  ...(obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING }),
  ...(obj.dialogAction && { dialogAction: DialogActionFilterSensitiveLog(obj.dialogAction) }),
  ...(obj.recentIntentSummaryView && {
    recentIntentSummaryView: obj.recentIntentSummaryView.map((item) => IntentSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.activeContexts && { activeContexts: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutSessionResponseFilterSensitiveLog = (obj: PutSessionResponse): any => ({
  ...obj,
  ...(obj.message && { message: SENSITIVE_STRING }),
  ...(obj.encodedMessage && { encodedMessage: SENSITIVE_STRING }),
  ...(obj.activeContexts && { activeContexts: SENSITIVE_STRING }),
});
