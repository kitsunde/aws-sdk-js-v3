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
import { ListWhatIfForecastsRequest, ListWhatIfForecastsResponse } from "../models/models_0";
import { de_ListWhatIfForecastsCommand, se_ListWhatIfForecastsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListWhatIfForecastsCommand}.
 */
export interface ListWhatIfForecastsCommandInput extends ListWhatIfForecastsRequest {}
/**
 * @public
 *
 * The output of {@link ListWhatIfForecastsCommand}.
 */
export interface ListWhatIfForecastsCommandOutput extends ListWhatIfForecastsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListWhatIfForecastsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListWhatIfForecastsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // ListWhatIfForecastsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListWhatIfForecastsCommand(input);
 * const response = await client.send(command);
 * // { // ListWhatIfForecastsResponse
 * //   WhatIfForecasts: [ // WhatIfForecasts
 * //     { // WhatIfForecastSummary
 * //       WhatIfForecastArn: "STRING_VALUE",
 * //       WhatIfForecastName: "STRING_VALUE",
 * //       WhatIfAnalysisArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWhatIfForecastsCommandInput - {@link ListWhatIfForecastsCommandInput}
 * @returns {@link ListWhatIfForecastsCommandOutput}
 * @see {@link ListWhatIfForecastsCommandInput} for command's `input` shape.
 * @see {@link ListWhatIfForecastsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class ListWhatIfForecastsCommand extends $Command<
  ListWhatIfForecastsCommandInput,
  ListWhatIfForecastsCommandOutput,
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
  constructor(readonly input: ListWhatIfForecastsCommandInput) {
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
  ): Handler<ListWhatIfForecastsCommandInput, ListWhatIfForecastsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWhatIfForecastsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListWhatIfForecastsCommand";
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
  private serialize(input: ListWhatIfForecastsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWhatIfForecastsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWhatIfForecastsCommandOutput> {
    return de_ListWhatIfForecastsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
