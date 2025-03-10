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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { RegisterTypeInput, RegisterTypeOutput } from "../models/models_0";
import { de_RegisterTypeCommand, se_RegisterTypeCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link RegisterTypeCommand}.
 */
export interface RegisterTypeCommandInput extends RegisterTypeInput {}
/**
 * @public
 *
 * The output of {@link RegisterTypeCommand}.
 */
export interface RegisterTypeCommandOutput extends RegisterTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Registers an extension with the CloudFormation service. Registering an
 *          extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p>
 *          <ul>
 *             <li>
 *                <p>Validating the extension schema.</p>
 *             </li>
 *             <li>
 *                <p>Determining which handlers, if any, have been specified for the extension.</p>
 *             </li>
 *             <li>
 *                <p>Making the extension available for use in your account.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how to develop extensions and ready them for registration,
 *          see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource
 *             Providers</a> in the <i>CloudFormation CLI User
 *          Guide</i>.</p>
 *          <p>You can have a maximum of 50 resource extension versions registered at a time. This
 *          maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p>
 *          <p>Once you have initiated a registration request using <code>
 *                <a>RegisterType</a>
 *             </code>, you can use <code>
 *                <a>DescribeTypeRegistration</a>
 *             </code> to
 *          monitor the progress of the registration request.</p>
 *          <p>Once you have registered a private extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For
 *          more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RegisterTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RegisterTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // RegisterTypeInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE", // required
 *   SchemaHandlerPackage: "STRING_VALUE", // required
 *   LoggingConfig: { // LoggingConfig
 *     LogRoleArn: "STRING_VALUE", // required
 *     LogGroupName: "STRING_VALUE", // required
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new RegisterTypeCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTypeOutput
 * //   RegistrationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterTypeCommandInput - {@link RegisterTypeCommandInput}
 * @returns {@link RegisterTypeCommandOutput}
 * @see {@link RegisterTypeCommandInput} for command's `input` shape.
 * @see {@link RegisterTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class RegisterTypeCommand extends $Command<
  RegisterTypeCommandInput,
  RegisterTypeCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: RegisterTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterTypeCommandInput, RegisterTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RegisterTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "RegisterTypeCommand";
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
  private serialize(input: RegisterTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterTypeCommandOutput> {
    return de_RegisterTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
