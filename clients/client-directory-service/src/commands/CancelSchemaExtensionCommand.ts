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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CancelSchemaExtensionRequest, CancelSchemaExtensionResult } from "../models/models_0";
import { de_CancelSchemaExtensionCommand, se_CancelSchemaExtensionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CancelSchemaExtensionCommand}.
 */
export interface CancelSchemaExtensionCommandInput extends CancelSchemaExtensionRequest {}
/**
 * @public
 *
 * The output of {@link CancelSchemaExtensionCommand}.
 */
export interface CancelSchemaExtensionCommandOutput extends CancelSchemaExtensionResult, __MetadataBearer {}

/**
 * @public
 * <p>Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema
 *       extension has started replicating to all domain controllers, the task can no longer be
 *       canceled. A schema extension can be canceled during any of the following states;
 *         <code>Initializing</code>, <code>CreatingSnapshot</code>, and
 *       <code>UpdatingSchema</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CancelSchemaExtensionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CancelSchemaExtensionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // CancelSchemaExtensionRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   SchemaExtensionId: "STRING_VALUE", // required
 * };
 * const command = new CancelSchemaExtensionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelSchemaExtensionCommandInput - {@link CancelSchemaExtensionCommandInput}
 * @returns {@link CancelSchemaExtensionCommandOutput}
 * @see {@link CancelSchemaExtensionCommandInput} for command's `input` shape.
 * @see {@link CancelSchemaExtensionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class CancelSchemaExtensionCommand extends $Command<
  CancelSchemaExtensionCommandInput,
  CancelSchemaExtensionCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: CancelSchemaExtensionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelSchemaExtensionCommandInput, CancelSchemaExtensionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelSchemaExtensionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "CancelSchemaExtensionCommand";
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
  private serialize(input: CancelSchemaExtensionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelSchemaExtensionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelSchemaExtensionCommandOutput> {
    return de_CancelSchemaExtensionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
