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

import { DeleteContactListRequest, DeleteContactListResponse } from "../models/models_0";
import { de_DeleteContactListCommand, se_DeleteContactListCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 *
 * The input for {@link DeleteContactListCommand}.
 */
export interface DeleteContactListCommandInput extends DeleteContactListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactListCommand}.
 */
export interface DeleteContactListCommandOutput extends DeleteContactListResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a contact list and all of the contacts on that list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteContactListCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteContactListCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // DeleteContactListRequest
 *   ContactListName: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactListCommandInput - {@link DeleteContactListCommandInput}
 * @returns {@link DeleteContactListCommandOutput}
 * @see {@link DeleteContactListCommandInput} for command's `input` shape.
 * @see {@link DeleteContactListCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class DeleteContactListCommand extends $Command<
  DeleteContactListCommandInput,
  DeleteContactListCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: DeleteContactListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteContactListCommandInput, DeleteContactListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteContactListCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "DeleteContactListCommand";
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
  private serialize(input: DeleteContactListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteContactListCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContactListCommandOutput> {
    return de_DeleteContactListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
