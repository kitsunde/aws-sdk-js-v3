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
import {
  DescribeBudgetActionsForAccountRequest,
  DescribeBudgetActionsForAccountResponse,
  DescribeBudgetActionsForAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeBudgetActionsForAccountCommand,
  se_DescribeBudgetActionsForAccountCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeBudgetActionsForAccountCommand}.
 */
export interface DescribeBudgetActionsForAccountCommandInput extends DescribeBudgetActionsForAccountRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetActionsForAccountCommand}.
 */
export interface DescribeBudgetActionsForAccountCommandOutput
  extends DescribeBudgetActionsForAccountResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          Describes all of the budget actions for an account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionsForAccountCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionsForAccountCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetActionsForAccountRequest
 *   AccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetActionsForAccountCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetActionsForAccountResponse
 * //   Actions: [ // Actions // required
 * //     { // Action
 * //       ActionId: "STRING_VALUE", // required
 * //       BudgetName: "STRING_VALUE", // required
 * //       NotificationType: "STRING_VALUE", // required
 * //       ActionType: "STRING_VALUE", // required
 * //       ActionThreshold: { // ActionThreshold
 * //         ActionThresholdValue: Number("double"), // required
 * //         ActionThresholdType: "STRING_VALUE", // required
 * //       },
 * //       Definition: { // Definition
 * //         IamActionDefinition: { // IamActionDefinition
 * //           PolicyArn: "STRING_VALUE", // required
 * //           Roles: [ // Roles
 * //             "STRING_VALUE",
 * //           ],
 * //           Groups: [ // Groups
 * //             "STRING_VALUE",
 * //           ],
 * //           Users: [ // Users
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ScpActionDefinition: { // ScpActionDefinition
 * //           PolicyId: "STRING_VALUE", // required
 * //           TargetIds: [ // TargetIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         SsmActionDefinition: { // SsmActionDefinition
 * //           ActionSubType: "STRING_VALUE", // required
 * //           Region: "STRING_VALUE", // required
 * //           InstanceIds: [ // InstanceIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       ExecutionRoleArn: "STRING_VALUE", // required
 * //       ApprovalModel: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       Subscribers: [ // Subscribers // required
 * //         { // Subscriber
 * //           SubscriptionType: "STRING_VALUE", // required
 * //           Address: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBudgetActionsForAccountCommandInput - {@link DescribeBudgetActionsForAccountCommandInput}
 * @returns {@link DescribeBudgetActionsForAccountCommandOutput}
 * @see {@link DescribeBudgetActionsForAccountCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionsForAccountCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
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
export class DescribeBudgetActionsForAccountCommand extends $Command<
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
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
  constructor(readonly input: DescribeBudgetActionsForAccountCommandInput) {
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
  ): Handler<DescribeBudgetActionsForAccountCommandInput, DescribeBudgetActionsForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBudgetActionsForAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetActionsForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeBudgetActionsForAccountResponseFilterSensitiveLog,
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
    input: DescribeBudgetActionsForAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeBudgetActionsForAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetActionsForAccountCommandOutput> {
    return de_DescribeBudgetActionsForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
