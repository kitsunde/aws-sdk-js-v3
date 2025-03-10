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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateConnectorDefinitionVersionRequest, CreateConnectorDefinitionVersionResponse } from "../models/models_0";
import {
  de_CreateConnectorDefinitionVersionCommand,
  se_CreateConnectorDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateConnectorDefinitionVersionCommand}.
 */
export interface CreateConnectorDefinitionVersionCommandInput extends CreateConnectorDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorDefinitionVersionCommand}.
 */
export interface CreateConnectorDefinitionVersionCommandOutput
  extends CreateConnectorDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * Creates a version of a connector definition which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateConnectorDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateConnectorDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateConnectorDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   ConnectorDefinitionId: "STRING_VALUE", // required
 *   Connectors: [ // __listOfConnector
 *     { // Connector
 *       ConnectorArn: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *       Parameters: { // __mapOf__string
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateConnectorDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConnectorDefinitionVersionCommandInput - {@link CreateConnectorDefinitionVersionCommandInput}
 * @returns {@link CreateConnectorDefinitionVersionCommandOutput}
 * @see {@link CreateConnectorDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class CreateConnectorDefinitionVersionCommand extends $Command<
  CreateConnectorDefinitionVersionCommandInput,
  CreateConnectorDefinitionVersionCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: CreateConnectorDefinitionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectorDefinitionVersionCommandInput, CreateConnectorDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectorDefinitionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateConnectorDefinitionVersionCommand";
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
    input: CreateConnectorDefinitionVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateConnectorDefinitionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConnectorDefinitionVersionCommandOutput> {
    return de_CreateConnectorDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
