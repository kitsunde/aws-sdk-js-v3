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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentTargetsRequest, DescribeAssessmentTargetsResponse } from "../models/models_0";
import { de_DescribeAssessmentTargetsCommand, se_DescribeAssessmentTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeAssessmentTargetsCommand}.
 */
export interface DescribeAssessmentTargetsCommandInput extends DescribeAssessmentTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssessmentTargetsCommand}.
 */
export interface DescribeAssessmentTargetsCommandOutput extends DescribeAssessmentTargetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the assessment targets that are specified by the ARNs of the assessment
 *          targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentTargetsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentTargetsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // DescribeAssessmentTargetsRequest
 *   assessmentTargetArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssessmentTargetsResponse
 * //   assessmentTargets: [ // AssessmentTargetList // required
 * //     { // AssessmentTarget
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       resourceGroupArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "STRING_VALUE", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAssessmentTargetsCommandInput - {@link DescribeAssessmentTargetsCommandInput}
 * @returns {@link DescribeAssessmentTargetsCommandOutput}
 * @see {@link DescribeAssessmentTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentTargetsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Describte assessment targets
 * ```javascript
 * // Describes the assessment targets that are specified by the ARNs of the assessment targets.
 * const input = {
 *   "assessmentTargetArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq"
 *   ]
 * };
 * const command = new DescribeAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "assessmentTargets": [
 *     {
 *       "name": "ExampleAssessmentTarget",
 *       "arn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq",
 *       "createdAt": "1458074191.459",
 *       "resourceGroupArn": "arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-PyGXopAI",
 *       "updatedAt": "1458074191.459"
 *     }
 *   ],
 *   "failedItems": {}
 * }
 * *\/
 * // example id: describte-assessment-targets-1481064527735
 * ```
 *
 */
export class DescribeAssessmentTargetsCommand extends $Command<
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: DescribeAssessmentTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAssessmentTargetsCommandInput, DescribeAssessmentTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAssessmentTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeAssessmentTargetsCommand";
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
  private serialize(input: DescribeAssessmentTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAssessmentTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAssessmentTargetsCommandOutput> {
    return de_DescribeAssessmentTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
