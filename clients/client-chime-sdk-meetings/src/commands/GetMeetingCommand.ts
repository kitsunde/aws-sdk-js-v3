// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ChimeSDKMeetingsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKMeetingsClient";
import { GetMeetingRequest, GetMeetingResponse, GetMeetingResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetMeetingCommand, se_GetMeetingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetMeetingCommand}.
 */
export interface GetMeetingCommandInput extends GetMeetingRequest {}
/**
 * @public
 *
 * The output of {@link GetMeetingCommand}.
 */
export interface GetMeetingCommandOutput extends GetMeetingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see
 *             <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 *             in the <i>Amazon Chime Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, GetMeetingCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, GetMeetingCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // GetMeetingRequest
 *   MeetingId: "STRING_VALUE", // required
 * };
 * const command = new GetMeetingCommand(input);
 * const response = await client.send(command);
 * // { // GetMeetingResponse
 * //   Meeting: { // Meeting
 * //     MeetingId: "STRING_VALUE",
 * //     MeetingHostId: "STRING_VALUE",
 * //     ExternalMeetingId: "STRING_VALUE",
 * //     MediaRegion: "STRING_VALUE",
 * //     MediaPlacement: { // MediaPlacement
 * //       AudioHostUrl: "STRING_VALUE",
 * //       AudioFallbackUrl: "STRING_VALUE",
 * //       SignalingUrl: "STRING_VALUE",
 * //       TurnControlUrl: "STRING_VALUE",
 * //       ScreenDataUrl: "STRING_VALUE",
 * //       ScreenViewingUrl: "STRING_VALUE",
 * //       ScreenSharingUrl: "STRING_VALUE",
 * //       EventIngestionUrl: "STRING_VALUE",
 * //     },
 * //     MeetingFeatures: { // MeetingFeaturesConfiguration
 * //       Audio: { // AudioFeatures
 * //         EchoReduction: "AVAILABLE" || "UNAVAILABLE",
 * //       },
 * //     },
 * //     PrimaryMeetingId: "STRING_VALUE",
 * //     TenantIds: [ // TenantIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     MeetingArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMeetingCommandInput - {@link GetMeetingCommandInput}
 * @returns {@link GetMeetingCommandOutput}
 * @see {@link GetMeetingCommandInput} for command's `input` shape.
 * @see {@link GetMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The user isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKMeetingsServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMeetings service.</p>
 *
 */
export class GetMeetingCommand extends $Command<
  GetMeetingCommandInput,
  GetMeetingCommandOutput,
  ChimeSDKMeetingsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetMeetingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMeetingsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMeetingCommandInput, GetMeetingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMeetingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMeetingsClient";
    const commandName = "GetMeetingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMeetingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetMeetingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMeetingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMeetingCommandOutput> {
    return de_GetMeetingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
