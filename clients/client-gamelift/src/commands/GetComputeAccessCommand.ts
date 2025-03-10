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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  GetComputeAccessInput,
  GetComputeAccessOutput,
  GetComputeAccessOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetComputeAccessCommand, se_GetComputeAccessCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetComputeAccessCommand}.
 */
export interface GetComputeAccessCommandInput extends GetComputeAccessInput {}
/**
 * @public
 *
 * The output of {@link GetComputeAccessCommand}.
 */
export interface GetComputeAccessCommandOutput extends GetComputeAccessOutput, __MetadataBearer {}

/**
 * @public
 * <p>Requests remote access to a fleet instance. Remote access is useful for debugging,
 *             gathering benchmarking data, or observing activity in real time. </p>
 *          <p>To remotely access an instance, you need credentials that match the operating system
 *             of the instance. For a Windows instance, Amazon GameLift returns a user name and password as
 *             strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift
 *             returns a user name and RSA private key, also as strings, for use with an SSH client.
 *             The private key must be saved in the proper format to a <code>.pem</code> file before
 *             using. If you're making this request using the CLI, saving the secret can be handled
 *             as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples
 *             for this operation. </p>
 *          <p>To request access to a specific instance, specify the IDs of both the instance and the
 *             fleet it belongs to.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet
 *                 Instances</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet
 *                 Issues</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetComputeAccessCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetComputeAccessCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // GetComputeAccessInput
 *   FleetId: "STRING_VALUE", // required
 *   ComputeName: "STRING_VALUE", // required
 * };
 * const command = new GetComputeAccessCommand(input);
 * const response = await client.send(command);
 * // { // GetComputeAccessOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   ComputeName: "STRING_VALUE",
 * //   ComputeArn: "STRING_VALUE",
 * //   Credentials: { // AwsCredentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretAccessKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComputeAccessCommandInput - {@link GetComputeAccessCommandInput}
 * @returns {@link GetComputeAccessCommandOutput}
 * @see {@link GetComputeAccessCommandInput} for command's `input` shape.
 * @see {@link GetComputeAccessCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class GetComputeAccessCommand extends $Command<
  GetComputeAccessCommandInput,
  GetComputeAccessCommandOutput,
  GameLiftClientResolvedConfig
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
  constructor(readonly input: GetComputeAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComputeAccessCommandInput, GetComputeAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComputeAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "GetComputeAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetComputeAccessOutputFilterSensitiveLog,
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
  private serialize(input: GetComputeAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetComputeAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComputeAccessCommandOutput> {
    return de_GetComputeAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
