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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { CreateExtensionAssociationRequest, ExtensionAssociation } from "../models/models_0";
import { de_CreateExtensionAssociationCommand, se_CreateExtensionAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateExtensionAssociationCommand}.
 */
export interface CreateExtensionAssociationCommandInput extends CreateExtensionAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateExtensionAssociationCommand}.
 */
export interface CreateExtensionAssociationCommandOutput extends ExtensionAssociation, __MetadataBearer {}

/**
 * @public
 * <p>When you create an extension or configure an Amazon Web Services authored extension, you
 *          associate the extension with an AppConfig application, environment, or
 *          configuration profile. For example, you can choose to run the <code>AppConfig
 *             deployment events to Amazon SNS</code>
 *          Amazon Web Services authored extension and receive notifications on an Amazon SNS
 *          topic anytime a configuration deployment is started for a specific application. Defining
 *          which extension to associate with an AppConfig resource is called an
 *             <i>extension association</i>. An extension association is a specified
 *          relationship between an extension and an AppConfig resource, such as an
 *          application or a configuration profile. For more information about extensions and
 *          associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
 *                AppConfig extensions</a> in the
 *          <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateExtensionAssociationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateExtensionAssociationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // CreateExtensionAssociationRequest
 *   ExtensionIdentifier: "STRING_VALUE", // required
 *   ExtensionVersionNumber: Number("int"),
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   Parameters: { // ParameterValueMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateExtensionAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ExtensionAssociation
 * //   Id: "STRING_VALUE",
 * //   ExtensionArn: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Parameters: { // ParameterValueMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ExtensionVersionNumber: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateExtensionAssociationCommandInput - {@link CreateExtensionAssociationCommandInput}
 * @returns {@link CreateExtensionAssociationCommandOutput}
 * @see {@link CreateExtensionAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateExtensionAssociationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of hosted configuration versions exceeds the limit for the AppConfig hosted configuration store. Delete one or more versions and try again.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 */
export class CreateExtensionAssociationCommand extends $Command<
  CreateExtensionAssociationCommandInput,
  CreateExtensionAssociationCommandOutput,
  AppConfigClientResolvedConfig
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
  constructor(readonly input: CreateExtensionAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExtensionAssociationCommandInput, CreateExtensionAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExtensionAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "CreateExtensionAssociationCommand";
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
  private serialize(input: CreateExtensionAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateExtensionAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateExtensionAssociationCommandOutput> {
    return de_CreateExtensionAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
