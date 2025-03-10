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
import { CreateCoreDefinitionVersionRequest, CreateCoreDefinitionVersionResponse } from "../models/models_0";
import {
  de_CreateCoreDefinitionVersionCommand,
  se_CreateCoreDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateCoreDefinitionVersionCommand}.
 */
export interface CreateCoreDefinitionVersionCommandInput extends CreateCoreDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCoreDefinitionVersionCommand}.
 */
export interface CreateCoreDefinitionVersionCommandOutput
  extends CreateCoreDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateCoreDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateCoreDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateCoreDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   CoreDefinitionId: "STRING_VALUE", // required
 *   Cores: [ // __listOfCore
 *     { // Core
 *       CertificateArn: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *       SyncShadow: true || false,
 *       ThingArn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCoreDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCoreDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCoreDefinitionVersionCommandInput - {@link CreateCoreDefinitionVersionCommandInput}
 * @returns {@link CreateCoreDefinitionVersionCommandOutput}
 * @see {@link CreateCoreDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateCoreDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class CreateCoreDefinitionVersionCommand extends $Command<
  CreateCoreDefinitionVersionCommandInput,
  CreateCoreDefinitionVersionCommandOutput,
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
  constructor(readonly input: CreateCoreDefinitionVersionCommandInput) {
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
  ): Handler<CreateCoreDefinitionVersionCommandInput, CreateCoreDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCoreDefinitionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateCoreDefinitionVersionCommand";
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
  private serialize(input: CreateCoreDefinitionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCoreDefinitionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCoreDefinitionVersionCommandOutput> {
    return de_CreateCoreDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
