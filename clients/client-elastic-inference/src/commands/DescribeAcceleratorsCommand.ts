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

import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient";
import { DescribeAcceleratorsRequest, DescribeAcceleratorsResponse } from "../models/models_0";
import { de_DescribeAcceleratorsCommand, se_DescribeAcceleratorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeAcceleratorsCommand}.
 */
export interface DescribeAcceleratorsCommandInput extends DescribeAcceleratorsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcceleratorsCommand}.
 */
export interface DescribeAcceleratorsCommandOutput extends DescribeAcceleratorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Describes information over a provided set of accelerators belonging to an account.
 *         </p>
 *          <p>
 *             February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance.
 *             After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2.
 *             However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorsCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorsCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const input = { // DescribeAcceleratorsRequest
 *   acceleratorIds: [ // AcceleratorIdList
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAcceleratorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAcceleratorsResponse
 * //   acceleratorSet: [ // ElasticInferenceAcceleratorSet
 * //     { // ElasticInferenceAccelerator
 * //       acceleratorHealth: { // ElasticInferenceAcceleratorHealth
 * //         status: "STRING_VALUE",
 * //       },
 * //       acceleratorType: "STRING_VALUE",
 * //       acceleratorId: "STRING_VALUE",
 * //       availabilityZone: "STRING_VALUE",
 * //       attachedResource: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAcceleratorsCommandInput - {@link DescribeAcceleratorsCommandInput}
 * @returns {@link DescribeAcceleratorsCommandOutput}
 * @see {@link DescribeAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for ElasticInferenceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>
 *             Raised when a malformed input has been provided to the API.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             Raised when an unexpected error occurred during request processing.
 *         </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *             Raised when the requested resource cannot be found.
 *         </p>
 *
 * @throws {@link ElasticInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElasticInference service.</p>
 *
 */
export class DescribeAcceleratorsCommand extends $Command<
  DescribeAcceleratorsCommandInput,
  DescribeAcceleratorsCommandOutput,
  ElasticInferenceClientResolvedConfig
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
  constructor(readonly input: DescribeAcceleratorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticInferenceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAcceleratorsCommandInput, DescribeAcceleratorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAcceleratorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticInferenceClient";
    const commandName = "DescribeAcceleratorsCommand";
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
  private serialize(input: DescribeAcceleratorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAcceleratorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAcceleratorsCommandOutput> {
    return de_DescribeAcceleratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
