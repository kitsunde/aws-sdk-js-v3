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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { ListBillingGroupCostReportsInput, ListBillingGroupCostReportsOutput } from "../models/models_0";
import {
  de_ListBillingGroupCostReportsCommand,
  se_ListBillingGroupCostReportsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListBillingGroupCostReportsCommand}.
 */
export interface ListBillingGroupCostReportsCommandInput extends ListBillingGroupCostReportsInput {}
/**
 * @public
 *
 * The output of {@link ListBillingGroupCostReportsCommand}.
 */
export interface ListBillingGroupCostReportsCommandOutput extends ListBillingGroupCostReportsOutput, __MetadataBearer {}

/**
 * @public
 * <p>A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated
 *       Amazon Web Services charges based on the associated pricing plan of a billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListBillingGroupCostReportsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListBillingGroupCostReportsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // ListBillingGroupCostReportsInput
 *   BillingPeriod: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListBillingGroupCostReportsFilter
 *     BillingGroupArns: [ // BillingGroupArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListBillingGroupCostReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillingGroupCostReportsOutput
 * //   BillingGroupCostReports: [ // BillingGroupCostReportList
 * //     { // BillingGroupCostReportElement
 * //       Arn: "STRING_VALUE",
 * //       AWSCost: "STRING_VALUE",
 * //       ProformaCost: "STRING_VALUE",
 * //       Margin: "STRING_VALUE",
 * //       MarginPercentage: "STRING_VALUE",
 * //       Currency: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillingGroupCostReportsCommandInput - {@link ListBillingGroupCostReportsCommandInput}
 * @returns {@link ListBillingGroupCostReportsCommandOutput}
 * @see {@link ListBillingGroupCostReportsCommandInput} for command's `input` shape.
 * @see {@link ListBillingGroupCostReportsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 */
export class ListBillingGroupCostReportsCommand extends $Command<
  ListBillingGroupCostReportsCommandInput,
  ListBillingGroupCostReportsCommandOutput,
  BillingconductorClientResolvedConfig
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
  constructor(readonly input: ListBillingGroupCostReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBillingGroupCostReportsCommandInput, ListBillingGroupCostReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBillingGroupCostReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListBillingGroupCostReportsCommand";
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
  private serialize(input: ListBillingGroupCostReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBillingGroupCostReportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBillingGroupCostReportsCommandOutput> {
    return de_ListBillingGroupCostReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
