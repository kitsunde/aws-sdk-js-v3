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

import {
  MarketplaceCommerceAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCommerceAnalyticsClient";
import { GenerateDataSetRequest, GenerateDataSetResult } from "../models/models_0";
import { de_GenerateDataSetCommand, se_GenerateDataSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GenerateDataSetCommand}.
 */
export interface GenerateDataSetCommandInput extends GenerateDataSetRequest {}
/**
 * @public
 *
 * The output of {@link GenerateDataSetCommand}.
 */
export interface GenerateDataSetCommandOutput extends GenerateDataSetResult, __MetadataBearer {}

/**
 * @public
 * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified
 *         S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that
 *         can be used to correlate requests with notifications from the SNS topic.
 *         Data sets will be published in comma-separated values (CSV) format with the file name \{data_set_type\}_YYYY-MM-DD.csv.
 *         If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
 *         be overwritten by the new file.
 *         Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
 *         s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCommerceAnalyticsClient, GenerateDataSetCommand } from "@aws-sdk/client-marketplace-commerce-analytics"; // ES Modules import
 * // const { MarketplaceCommerceAnalyticsClient, GenerateDataSetCommand } = require("@aws-sdk/client-marketplace-commerce-analytics"); // CommonJS import
 * const client = new MarketplaceCommerceAnalyticsClient(config);
 * const input = { // GenerateDataSetRequest
 *   dataSetType: "STRING_VALUE", // required
 *   dataSetPublicationDate: new Date("TIMESTAMP"), // required
 *   roleNameArn: "STRING_VALUE", // required
 *   destinationS3BucketName: "STRING_VALUE", // required
 *   destinationS3Prefix: "STRING_VALUE",
 *   snsTopicArn: "STRING_VALUE", // required
 *   customerDefinedValues: { // CustomerDefinedValues
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GenerateDataSetCommand(input);
 * const response = await client.send(command);
 * // { // GenerateDataSetResult
 * //   dataSetRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateDataSetCommandInput - {@link GenerateDataSetCommandInput}
 * @returns {@link GenerateDataSetCommandOutput}
 * @see {@link GenerateDataSetCommandInput} for command's `input` shape.
 * @see {@link GenerateDataSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCommerceAnalyticsClientResolvedConfig | config} for MarketplaceCommerceAnalyticsClient's `config` shape.
 *
 * @throws {@link MarketplaceCommerceAnalyticsException} (server fault)
 *  This exception is thrown when an internal service error occurs.
 *
 * @throws {@link MarketplaceCommerceAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCommerceAnalytics service.</p>
 *
 */
export class GenerateDataSetCommand extends $Command<
  GenerateDataSetCommandInput,
  GenerateDataSetCommandOutput,
  MarketplaceCommerceAnalyticsClientResolvedConfig
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
  constructor(readonly input: GenerateDataSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCommerceAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateDataSetCommandInput, GenerateDataSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateDataSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCommerceAnalyticsClient";
    const commandName = "GenerateDataSetCommand";
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
  private serialize(input: GenerateDataSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GenerateDataSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateDataSetCommandOutput> {
    return de_GenerateDataSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
