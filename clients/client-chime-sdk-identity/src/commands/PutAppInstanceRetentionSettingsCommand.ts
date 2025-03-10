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

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { PutAppInstanceRetentionSettingsRequest, PutAppInstanceRetentionSettingsResponse } from "../models/models_0";
import {
  de_PutAppInstanceRetentionSettingsCommand,
  se_PutAppInstanceRetentionSettingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutAppInstanceRetentionSettingsCommand}.
 */
export interface PutAppInstanceRetentionSettingsCommandInput extends PutAppInstanceRetentionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutAppInstanceRetentionSettingsCommand}.
 */
export interface PutAppInstanceRetentionSettingsCommandOutput
  extends PutAppInstanceRetentionSettingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Sets the amount of time in days that a given <code>AppInstance</code> retains
 *          data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, PutAppInstanceRetentionSettingsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, PutAppInstanceRetentionSettingsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // PutAppInstanceRetentionSettingsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   AppInstanceRetentionSettings: { // AppInstanceRetentionSettings
 *     ChannelRetentionSettings: { // ChannelRetentionSettings
 *       RetentionDays: Number("int"),
 *     },
 *   },
 * };
 * const command = new PutAppInstanceRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutAppInstanceRetentionSettingsResponse
 * //   AppInstanceRetentionSettings: { // AppInstanceRetentionSettings
 * //     ChannelRetentionSettings: { // ChannelRetentionSettings
 * //       RetentionDays: Number("int"),
 * //     },
 * //   },
 * //   InitiateDeletionTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutAppInstanceRetentionSettingsCommandInput - {@link PutAppInstanceRetentionSettingsCommandInput}
 * @returns {@link PutAppInstanceRetentionSettingsCommandOutput}
 * @see {@link PutAppInstanceRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 */
export class PutAppInstanceRetentionSettingsCommand extends $Command<
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
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
  constructor(readonly input: PutAppInstanceRetentionSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAppInstanceRetentionSettingsCommandInput, PutAppInstanceRetentionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAppInstanceRetentionSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "PutAppInstanceRetentionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: PutAppInstanceRetentionSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutAppInstanceRetentionSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAppInstanceRetentionSettingsCommandOutput> {
    return de_PutAppInstanceRetentionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
