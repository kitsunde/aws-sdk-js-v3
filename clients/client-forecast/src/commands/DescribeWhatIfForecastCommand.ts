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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeWhatIfForecastRequest, DescribeWhatIfForecastResponse } from "../models/models_0";
import { de_DescribeWhatIfForecastCommand, se_DescribeWhatIfForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeWhatIfForecastCommand}.
 */
export interface DescribeWhatIfForecastCommandInput extends DescribeWhatIfForecastRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWhatIfForecastCommand}.
 */
export interface DescribeWhatIfForecastCommandOutput extends DescribeWhatIfForecastResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeWhatIfForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeWhatIfForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DescribeWhatIfForecastRequest
 *   WhatIfForecastArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWhatIfForecastResponse
 * //   WhatIfForecastName: "STRING_VALUE",
 * //   WhatIfForecastArn: "STRING_VALUE",
 * //   WhatIfAnalysisArn: "STRING_VALUE",
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   Status: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   TimeSeriesTransformations: [ // TimeSeriesTransformations
 * //     { // TimeSeriesTransformation
 * //       Action: { // Action
 * //         AttributeName: "STRING_VALUE", // required
 * //         Operation: "ADD" || "SUBTRACT" || "MULTIPLY" || "DIVIDE", // required
 * //         Value: Number("double"), // required
 * //       },
 * //       TimeSeriesConditions: [ // TimeSeriesConditions
 * //         { // TimeSeriesCondition
 * //           AttributeName: "STRING_VALUE", // required
 * //           AttributeValue: "STRING_VALUE", // required
 * //           Condition: "EQUALS" || "NOT_EQUALS" || "LESS_THAN" || "GREATER_THAN", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   TimeSeriesReplacementsDataSource: { // TimeSeriesReplacementsDataSource
 * //     S3Config: { // S3Config
 * //       Path: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //     Schema: { // Schema
 * //       Attributes: [ // SchemaAttributes
 * //         { // SchemaAttribute
 * //           AttributeName: "STRING_VALUE",
 * //           AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 * //         },
 * //       ],
 * //     },
 * //     Format: "STRING_VALUE",
 * //     TimestampFormat: "STRING_VALUE",
 * //   },
 * //   ForecastTypes: [ // ForecastTypes
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeWhatIfForecastCommandInput - {@link DescribeWhatIfForecastCommandInput}
 * @returns {@link DescribeWhatIfForecastCommandOutput}
 * @see {@link DescribeWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link DescribeWhatIfForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class DescribeWhatIfForecastCommand extends $Command<
  DescribeWhatIfForecastCommandInput,
  DescribeWhatIfForecastCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: DescribeWhatIfForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWhatIfForecastCommandInput, DescribeWhatIfForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWhatIfForecastCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeWhatIfForecastCommand";
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
  private serialize(input: DescribeWhatIfForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWhatIfForecastCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWhatIfForecastCommandOutput> {
    return de_DescribeWhatIfForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
