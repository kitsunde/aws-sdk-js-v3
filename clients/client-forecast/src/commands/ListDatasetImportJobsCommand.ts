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
import { ListDatasetImportJobsRequest, ListDatasetImportJobsResponse } from "../models/models_0";
import { de_ListDatasetImportJobsCommand, se_ListDatasetImportJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListDatasetImportJobsCommand}.
 */
export interface ListDatasetImportJobsCommandInput extends ListDatasetImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetImportJobsCommand}.
 */
export interface ListDatasetImportJobsCommandOutput extends ListDatasetImportJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>
 *       operation. For each import job, this operation returns a summary of its properties, including
 *       its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
 *       ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>
 *       operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetImportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetImportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // ListDatasetImportJobsRequest
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
 * const command = new ListDatasetImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetImportJobsResponse
 * //   DatasetImportJobs: [ // DatasetImportJobs
 * //     { // DatasetImportJobSummary
 * //       DatasetImportJobArn: "STRING_VALUE",
 * //       DatasetImportJobName: "STRING_VALUE",
 * //       DataSource: { // DataSource
 * //         S3Config: { // S3Config
 * //           Path: "STRING_VALUE", // required
 * //           RoleArn: "STRING_VALUE", // required
 * //           KMSKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //       ImportMode: "FULL" || "INCREMENTAL",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetImportJobsCommandInput - {@link ListDatasetImportJobsCommandInput}
 * @returns {@link ListDatasetImportJobsCommandOutput}
 * @see {@link ListDatasetImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetImportJobsCommandOutput} for command's `response` shape.
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
export class ListDatasetImportJobsCommand extends $Command<
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
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
  constructor(readonly input: ListDatasetImportJobsCommandInput) {
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
  ): Handler<ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDatasetImportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListDatasetImportJobsCommand";
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
  private serialize(input: ListDatasetImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDatasetImportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetImportJobsCommandOutput> {
    return de_ListDatasetImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
