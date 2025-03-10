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
import { CreateMitigationActionRequest, CreateMitigationActionResponse } from "../models/models_0";
import { de_CreateMitigationActionCommand, se_CreateMitigationActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateMitigationActionCommand}.
 */
export interface CreateMitigationActionCommandInput extends CreateMitigationActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateMitigationActionCommand}.
 */
export interface CreateMitigationActionCommandOutput extends CreateMitigationActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateMitigationActionRequest
 *   actionName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   actionParams: { // MitigationActionParams
 *     updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 *       action: "DEACTIVATE", // required
 *     },
 *     updateCACertificateParams: { // UpdateCACertificateParams
 *       action: "DEACTIVATE", // required
 *     },
 *     addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 *       thingGroupNames: [ // ThingGroupNames // required
 *         "STRING_VALUE",
 *       ],
 *       overrideDynamicGroups: true || false,
 *     },
 *     replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 *       templateName: "BLANK_POLICY", // required
 *     },
 *     enableIoTLoggingParams: { // EnableIoTLoggingParams
 *       roleArnForLogging: "STRING_VALUE", // required
 *       logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 *     },
 *     publishFindingToSnsParams: { // PublishFindingToSnsParams
 *       topicArn: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateMitigationActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateMitigationActionResponse
 * //   actionArn: "STRING_VALUE",
 * //   actionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMitigationActionCommandInput - {@link CreateMitigationActionCommandInput}
 * @returns {@link CreateMitigationActionCommandOutput}
 * @see {@link CreateMitigationActionCommandInput} for command's `input` shape.
 * @see {@link CreateMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class CreateMitigationActionCommand extends $Command<
  CreateMitigationActionCommandInput,
  CreateMitigationActionCommandOutput,
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
  constructor(readonly input: CreateMitigationActionCommandInput) {
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
  ): Handler<CreateMitigationActionCommandInput, CreateMitigationActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMitigationActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateMitigationActionCommand";
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
  private serialize(input: CreateMitigationActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMitigationActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMitigationActionCommandOutput> {
    return de_CreateMitigationActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
