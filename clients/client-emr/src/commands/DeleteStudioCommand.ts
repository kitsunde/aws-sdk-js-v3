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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DeleteStudioInput } from "../models/models_0";
import { de_DeleteStudioCommand, se_DeleteStudioCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteStudioCommand}.
 */
export interface DeleteStudioCommandInput extends DeleteStudioInput {}
/**
 * @public
 *
 * The output of {@link DeleteStudioCommand}.
 */
export interface DeleteStudioCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Removes an Amazon EMR Studio from the Studio metadata store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // DeleteStudioInput
 *   StudioId: "STRING_VALUE", // required
 * };
 * const command = new DeleteStudioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStudioCommandInput - {@link DeleteStudioCommandInput}
 * @returns {@link DeleteStudioCommandOutput}
 * @see {@link DeleteStudioCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class DeleteStudioCommand extends $Command<
  DeleteStudioCommandInput,
  DeleteStudioCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: DeleteStudioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStudioCommandInput, DeleteStudioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteStudioCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DeleteStudioCommand";
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
  private serialize(input: DeleteStudioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteStudioCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStudioCommandOutput> {
    return de_DeleteStudioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
