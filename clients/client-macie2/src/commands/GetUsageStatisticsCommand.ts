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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetUsageStatisticsRequest, GetUsageStatisticsResponse } from "../models/models_0";
import { de_GetUsageStatisticsCommand, se_GetUsageStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetUsageStatisticsCommand}.
 */
export interface GetUsageStatisticsCommandInput extends GetUsageStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageStatisticsCommand}.
 */
export interface GetUsageStatisticsCommandOutput extends GetUsageStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) quotas and aggregated usage data for one or more accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetUsageStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetUsageStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // GetUsageStatisticsRequest
 *   filterBy: [ // __listOfUsageStatisticsFilter
 *     { // UsageStatisticsFilter
 *       comparator: "GT" || "GTE" || "LT" || "LTE" || "EQ" || "NE" || "CONTAINS",
 *       key: "accountId" || "serviceLimit" || "freeTrialStartDate" || "total",
 *       values: [ // __listOf__string
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: { // UsageStatisticsSortBy
 *     key: "accountId" || "total" || "serviceLimitValue" || "freeTrialStartDate",
 *     orderBy: "ASC" || "DESC",
 *   },
 *   timeRange: "MONTH_TO_DATE" || "PAST_30_DAYS",
 * };
 * const command = new GetUsageStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageStatisticsResponse
 * //   nextToken: "STRING_VALUE",
 * //   records: [ // __listOfUsageRecord
 * //     { // UsageRecord
 * //       accountId: "STRING_VALUE",
 * //       automatedDiscoveryFreeTrialStartDate: new Date("TIMESTAMP"),
 * //       freeTrialStartDate: new Date("TIMESTAMP"),
 * //       usage: [ // __listOfUsageByAccount
 * //         { // UsageByAccount
 * //           currency: "USD",
 * //           estimatedCost: "STRING_VALUE",
 * //           serviceLimit: { // ServiceLimit
 * //             isServiceLimited: true || false,
 * //             unit: "TERABYTES",
 * //             value: Number("long"),
 * //           },
 * //           type: "DATA_INVENTORY_EVALUATION" || "SENSITIVE_DATA_DISCOVERY" || "AUTOMATED_SENSITIVE_DATA_DISCOVERY" || "AUTOMATED_OBJECT_MONITORING",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   timeRange: "MONTH_TO_DATE" || "PAST_30_DAYS",
 * // };
 *
 * ```
 *
 * @param GetUsageStatisticsCommandInput - {@link GetUsageStatisticsCommandInput}
 * @returns {@link GetUsageStatisticsCommandOutput}
 * @see {@link GetUsageStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetUsageStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 */
export class GetUsageStatisticsCommand extends $Command<
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: GetUsageStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUsageStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetUsageStatisticsCommand";
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
  private serialize(input: GetUsageStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUsageStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsageStatisticsCommandOutput> {
    return de_GetUsageStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
