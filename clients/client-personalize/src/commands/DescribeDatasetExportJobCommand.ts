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

import { DescribeDatasetExportJobRequest, DescribeDatasetExportJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeDatasetExportJobCommand, se_DescribeDatasetExportJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeDatasetExportJobCommand}.
 */
export interface DescribeDatasetExportJobCommandInput extends DescribeDatasetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetExportJobCommand}.
 */
export interface DescribeDatasetExportJobCommandOutput extends DescribeDatasetExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeDatasetExportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeDatasetExportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeDatasetExportJobRequest
 *   datasetExportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetExportJobResponse
 * //   datasetExportJob: { // DatasetExportJob
 * //     jobName: "STRING_VALUE",
 * //     datasetExportJobArn: "STRING_VALUE",
 * //     datasetArn: "STRING_VALUE",
 * //     ingestionMode: "BULK" || "PUT" || "ALL",
 * //     roleArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     jobOutput: { // DatasetExportJobOutput
 * //       s3DataDestination: { // S3DataConfig
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     failureReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatasetExportJobCommandInput - {@link DescribeDatasetExportJobCommandInput}
 * @returns {@link DescribeDatasetExportJobCommandOutput}
 * @see {@link DescribeDatasetExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetExportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class DescribeDatasetExportJobCommand extends $Command<
  DescribeDatasetExportJobCommandInput,
  DescribeDatasetExportJobCommandOutput,
  PersonalizeClientResolvedConfig
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
  constructor(readonly input: DescribeDatasetExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDatasetExportJobCommandInput, DescribeDatasetExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDatasetExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeDatasetExportJobCommand";
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
  private serialize(input: DescribeDatasetExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDatasetExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatasetExportJobCommandOutput> {
    return de_DescribeDatasetExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
