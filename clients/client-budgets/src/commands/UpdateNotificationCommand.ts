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

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { UpdateNotificationRequest, UpdateNotificationResponse } from "../models/models_0";
import { de_UpdateNotificationCommand, se_UpdateNotificationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateNotificationCommand}.
 */
export interface UpdateNotificationCommandInput extends UpdateNotificationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNotificationCommand}.
 */
export interface UpdateNotificationCommandOutput extends UpdateNotificationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, UpdateNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, UpdateNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // UpdateNotificationRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   OldNotification: { // Notification
 *     NotificationType: "STRING_VALUE", // required
 *     ComparisonOperator: "STRING_VALUE", // required
 *     Threshold: Number("double"), // required
 *     ThresholdType: "STRING_VALUE",
 *     NotificationState: "STRING_VALUE",
 *   },
 *   NewNotification: {
 *     NotificationType: "STRING_VALUE", // required
 *     ComparisonOperator: "STRING_VALUE", // required
 *     Threshold: Number("double"), // required
 *     ThresholdType: "STRING_VALUE",
 *     NotificationState: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateNotificationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotificationCommandInput - {@link UpdateNotificationCommandInput}
 * @returns {@link UpdateNotificationCommandOutput}
 * @see {@link UpdateNotificationCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link DuplicateRecordException} (client fault)
 *  <p>The budget name already exists. Budget names must be unique within an account.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can’t locate the resource that you specified.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The number of API requests has exceeded the maximum allowed API request throttling limit for the account.
 *     </p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 */
export class UpdateNotificationCommand extends $Command<
  UpdateNotificationCommandInput,
  UpdateNotificationCommandOutput,
  BudgetsClientResolvedConfig
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
  constructor(readonly input: UpdateNotificationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNotificationCommandInput, UpdateNotificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNotificationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "UpdateNotificationCommand";
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
  private serialize(input: UpdateNotificationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateNotificationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNotificationCommandOutput> {
    return de_UpdateNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
