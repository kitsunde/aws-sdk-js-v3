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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeAvailabilityOptionsRequest, DescribeAvailabilityOptionsResponse } from "../models/models_0";
import { de_DescribeAvailabilityOptionsCommand, se_DescribeAvailabilityOptionsCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeAvailabilityOptionsCommand}.
 */
export interface DescribeAvailabilityOptionsCommandInput extends DescribeAvailabilityOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAvailabilityOptionsCommand}.
 */
export interface DescribeAvailabilityOptionsCommandOutput
  extends DescribeAvailabilityOptionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeAvailabilityOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeAvailabilityOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeAvailabilityOptionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   Deployed: true || false,
 * };
 * const command = new DescribeAvailabilityOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAvailabilityOptionsResponse
 * //   AvailabilityOptions: { // AvailabilityOptionsStatus
 * //     Options: true || false, // required
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "STRING_VALUE", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAvailabilityOptionsCommandInput - {@link DescribeAvailabilityOptionsCommandInput}
 * @returns {@link DescribeAvailabilityOptionsCommandOutput}
 * @see {@link DescribeAvailabilityOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityOptionsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>The request was rejected because it attempted an operation which is not enabled.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The request was rejected because it specified an invalid type definition.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a resource limit has already been met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 */
export class DescribeAvailabilityOptionsCommand extends $Command<
  DescribeAvailabilityOptionsCommandInput,
  DescribeAvailabilityOptionsCommandOutput,
  CloudSearchClientResolvedConfig
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
  constructor(readonly input: DescribeAvailabilityOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAvailabilityOptionsCommandInput, DescribeAvailabilityOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAvailabilityOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeAvailabilityOptionsCommand";
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
  private serialize(input: DescribeAvailabilityOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAvailabilityOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAvailabilityOptionsCommandOutput> {
    return de_DescribeAvailabilityOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
