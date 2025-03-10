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
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { DescribeConfigurationsRequest, DescribeConfigurationsResponse } from "../models/models_0";
import { de_DescribeConfigurationsCommand, se_DescribeConfigurationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeConfigurationsCommand}.
 */
export interface DescribeConfigurationsCommandInput extends DescribeConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationsCommand}.
 */
export interface DescribeConfigurationsCommandOutput extends DescribeConfigurationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves attributes for a list of configuration item IDs.</p>
 *          <note>
 *             <p>All of the supplied IDs must be for the same asset type from one of the
 *         following:</p>
 *             <ul>
 *                <li>
 *                   <p>server</p>
 *                </li>
 *                <li>
 *                   <p>application</p>
 *                </li>
 *                <li>
 *                   <p>process</p>
 *                </li>
 *                <li>
 *                   <p>connection</p>
 *                </li>
 *             </ul>
 *             <p>Output fields are specific to the asset type specified. For example, the output for a
 *           <i>server</i> configuration item includes a list of attributes about the
 *         server, such as host name, operating system, number of network cards, etc.</p>
 *             <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application
 *           Discovery Service User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeConfigurationsRequest
 *   configurationIds: [ // ConfigurationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationsResponse
 * //   configurations: [ // DescribeConfigurationsAttributes
 * //     { // DescribeConfigurationsAttribute
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationsCommandInput - {@link DescribeConfigurationsCommandInput}
 * @returns {@link DescribeConfigurationsCommandOutput}
 * @see {@link DescribeConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *       policy associated with this account.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home region is not set. Set the home region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 */
export class DescribeConfigurationsCommand extends $Command<
  DescribeConfigurationsCommandInput,
  DescribeConfigurationsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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
  constructor(readonly input: DescribeConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationsCommandInput, DescribeConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeConfigurationsCommand";
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
  private serialize(input: DescribeConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConfigurationsCommandOutput> {
    return de_DescribeConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
