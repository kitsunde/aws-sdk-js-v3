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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { GetAutoTerminationPolicyInput, GetAutoTerminationPolicyOutput } from "../models/models_0";
import { de_GetAutoTerminationPolicyCommand, se_GetAutoTerminationPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetAutoTerminationPolicyCommand}.
 */
export interface GetAutoTerminationPolicyCommandInput extends GetAutoTerminationPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetAutoTerminationPolicyCommand}.
 */
export interface GetAutoTerminationPolicyCommandOutput extends GetAutoTerminationPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the auto-termination policy for an Amazon EMR cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetAutoTerminationPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetAutoTerminationPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // GetAutoTerminationPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new GetAutoTerminationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAutoTerminationPolicyOutput
 * //   AutoTerminationPolicy: { // AutoTerminationPolicy
 * //     IdleTimeout: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutoTerminationPolicyCommandInput - {@link GetAutoTerminationPolicyCommandInput}
 * @returns {@link GetAutoTerminationPolicyCommandOutput}
 * @see {@link GetAutoTerminationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAutoTerminationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class GetAutoTerminationPolicyCommand extends $Command<
  GetAutoTerminationPolicyCommandInput,
  GetAutoTerminationPolicyCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: GetAutoTerminationPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAutoTerminationPolicyCommandInput, GetAutoTerminationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAutoTerminationPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "GetAutoTerminationPolicyCommand";
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
  private serialize(input: GetAutoTerminationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAutoTerminationPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAutoTerminationPolicyCommandOutput> {
    return de_GetAutoTerminationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
