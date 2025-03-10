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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateAccountAuditConfigurationRequest, UpdateAccountAuditConfigurationResponse } from "../models/models_2";
import {
  de_UpdateAccountAuditConfigurationCommand,
  se_UpdateAccountAuditConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateAccountAuditConfigurationCommand}.
 */
export interface UpdateAccountAuditConfigurationCommandInput extends UpdateAccountAuditConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountAuditConfigurationCommand}.
 */
export interface UpdateAccountAuditConfigurationCommandOutput
  extends UpdateAccountAuditConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Configures or reconfigures the Device Defender audit settings for this account.
 *           Settings include how audit notifications are sent and which audit checks are
 *           enabled or disabled.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAccountAuditConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateAccountAuditConfigurationRequest
 *   roleArn: "STRING_VALUE",
 *   auditNotificationTargetConfigurations: { // AuditNotificationTargetConfigurations
 *     "<keys>": { // AuditNotificationTarget
 *       targetArn: "STRING_VALUE",
 *       roleArn: "STRING_VALUE",
 *       enabled: true || false,
 *     },
 *   },
 *   auditCheckConfigurations: { // AuditCheckConfigurations
 *     "<keys>": { // AuditCheckConfiguration
 *       enabled: true || false,
 *     },
 *   },
 * };
 * const command = new UpdateAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccountAuditConfigurationCommandInput - {@link UpdateAccountAuditConfigurationCommandInput}
 * @returns {@link UpdateAccountAuditConfigurationCommandOutput}
 * @see {@link UpdateAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class UpdateAccountAuditConfigurationCommand extends $Command<
  UpdateAccountAuditConfigurationCommandInput,
  UpdateAccountAuditConfigurationCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: UpdateAccountAuditConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAccountAuditConfigurationCommandInput, UpdateAccountAuditConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAccountAuditConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateAccountAuditConfigurationCommand";
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
    input: UpdateAccountAuditConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateAccountAuditConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAccountAuditConfigurationCommandOutput> {
    return de_UpdateAccountAuditConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
