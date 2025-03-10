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

import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { ListHarvestJobsRequest, ListHarvestJobsResponse } from "../models/models_0";
import { de_ListHarvestJobsCommand, se_ListHarvestJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListHarvestJobsCommand}.
 */
export interface ListHarvestJobsCommandInput extends ListHarvestJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListHarvestJobsCommand}.
 */
export interface ListHarvestJobsCommandOutput extends ListHarvestJobsResponse, __MetadataBearer {}

/**
 * @public
 * Returns a collection of HarvestJob records.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, ListHarvestJobsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, ListHarvestJobsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // ListHarvestJobsRequest
 *   IncludeChannelId: "STRING_VALUE",
 *   IncludeStatus: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListHarvestJobsResponse
 * //   HarvestJobs: [ // __listOfHarvestJob
 * //     { // HarvestJob
 * //       Arn: "STRING_VALUE",
 * //       ChannelId: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       EndTime: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       OriginEndpointId: "STRING_VALUE",
 * //       S3Destination: { // S3Destination
 * //         BucketName: "STRING_VALUE", // required
 * //         ManifestKey: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //       },
 * //       StartTime: "STRING_VALUE",
 * //       Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHarvestJobsCommandInput - {@link ListHarvestJobsCommandInput}
 * @returns {@link ListHarvestJobsCommandOutput}
 * @see {@link ListHarvestJobsCommandInput} for command's `input` shape.
 * @see {@link ListHarvestJobsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageServiceException}
 * <p>Base exception class for all service exceptions from MediaPackage service.</p>
 *
 */
export class ListHarvestJobsCommand extends $Command<
  ListHarvestJobsCommandInput,
  ListHarvestJobsCommandOutput,
  MediaPackageClientResolvedConfig
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
  constructor(readonly input: ListHarvestJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHarvestJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "ListHarvestJobsCommand";
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
  private serialize(input: ListHarvestJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHarvestJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHarvestJobsCommandOutput> {
    return de_ListHarvestJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
