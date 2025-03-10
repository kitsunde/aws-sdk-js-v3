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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListMetricValuesRequest, ListMetricValuesResponse } from "../models/models_1";
import { de_ListMetricValuesCommand, se_ListMetricValuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListMetricValuesCommand}.
 */
export interface ListMetricValuesCommandInput extends ListMetricValuesRequest {}
/**
 * @public
 *
 * The output of {@link ListMetricValuesCommand}.
 */
export interface ListMetricValuesCommandOutput extends ListMetricValuesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric)
 *       by the given thing during the specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListMetricValuesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListMetricValuesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListMetricValuesRequest
 *   thingName: "STRING_VALUE", // required
 *   metricName: "STRING_VALUE", // required
 *   dimensionName: "STRING_VALUE",
 *   dimensionValueOperator: "IN" || "NOT_IN",
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMetricValuesCommand(input);
 * const response = await client.send(command);
 * // { // ListMetricValuesResponse
 * //   metricDatumList: [ // MetricDatumList
 * //     { // MetricDatum
 * //       timestamp: new Date("TIMESTAMP"),
 * //       value: { // MetricValue
 * //         count: Number("long"),
 * //         cidrs: [ // Cidrs
 * //           "STRING_VALUE",
 * //         ],
 * //         ports: [ // Ports
 * //           Number("int"),
 * //         ],
 * //         number: Number("double"),
 * //         numbers: [ // NumberList
 * //           Number("double"),
 * //         ],
 * //         strings: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetricValuesCommandInput - {@link ListMetricValuesCommandInput}
 * @returns {@link ListMetricValuesCommandOutput}
 * @see {@link ListMetricValuesCommandInput} for command's `input` shape.
 * @see {@link ListMetricValuesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class ListMetricValuesCommand extends $Command<
  ListMetricValuesCommandInput,
  ListMetricValuesCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: ListMetricValuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMetricValuesCommandInput, ListMetricValuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMetricValuesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListMetricValuesCommand";
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
  private serialize(input: ListMetricValuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMetricValuesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMetricValuesCommandOutput> {
    return de_ListMetricValuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
