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

import { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import { GetResourceInput, GetResourceOutput, GetResourceOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetResourceCommand, se_GetResourceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link GetResourceCommand}.
 */
export interface GetResourceCommandInput extends GetResourceInput {}
/**
 * @public
 *
 * The output of {@link GetResourceCommand}.
 */
export interface GetResourceCommandOutput extends GetResourceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the current state of the specified resource. For details, see
 *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-read.html">Reading a resource's current state</a>.</p>
 *          <p>You can use this action to return information about an existing resource in your account
 *       and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, GetResourceCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, GetResourceCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * const client = new CloudControlClient(config);
 * const input = { // GetResourceInput
 *   TypeName: "STRING_VALUE", // required
 *   TypeVersionId: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetResourceCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceOutput
 * //   TypeName: "STRING_VALUE",
 * //   ResourceDescription: { // ResourceDescription
 * //     Identifier: "STRING_VALUE",
 * //     Properties: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceCommandInput - {@link GetResourceCommandInput}
 * @returns {@link GetResourceCommandOutput}
 * @see {@link GetResourceCommandInput} for command's `input` shape.
 * @see {@link GetResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource with the name requested already exists.</p>
 *
 * @throws {@link GeneralServiceException} (client fault)
 *  <p>The resource handler has returned that the downstream service generated an error that
 *       doesn't map to any other handler error code.</p>
 *
 * @throws {@link HandlerFailureException} (server fault)
 *  <p>The resource handler has failed without a returning a more specific error code. This can
 *       include timeouts.</p>
 *
 * @throws {@link HandlerInternalFailureException} (server fault)
 *  <p>The resource handler has returned that an unexpected error occurred within the resource
 *       handler.</p>
 *
 * @throws {@link InvalidCredentialsException} (client fault)
 *  <p>The resource handler has returned that the credentials provided by the user are
 *       invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The resource handler has returned that invalid input from the user has generated a generic
 *       exception.</p>
 *
 * @throws {@link NetworkFailureException} (server fault)
 *  <p>The resource handler has returned that the request couldn't be completed due to networking
 *       issues, such as a failure to receive a response from the server.</p>
 *
 * @throws {@link NotStabilizedException} (client fault)
 *  <p>The resource handler has returned that the downstream resource failed to complete all of
 *       its ready-state checks.</p>
 *
 * @throws {@link NotUpdatableException} (client fault)
 *  <p>One or more properties included in this resource operation are defined as create-only, and
 *       therefore can't be updated.</p>
 *
 * @throws {@link PrivateTypeException} (client fault)
 *  <p>Cloud Control API hasn't received a valid response from the resource handler, due to a configuration
 *       error. This includes issues such as the resource handler returning an invalid response, or
 *       timing out.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource is temporarily unavailable to be acted upon. For example, if the resource is
 *       currently undergoing an operation and can't be acted upon until that operation is
 *       finished.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified identifier can't be found.</p>
 *
 * @throws {@link ServiceInternalErrorException} (server fault)
 *  <p>The resource handler has returned that the downstream service returned an internal error,
 *       typically with a <code>5XX HTTP</code> status code.</p>
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The resource handler has returned that a non-transient resource limit was reached on the
 *       service side.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 * @throws {@link UnsupportedActionException} (client fault)
 *  <p>The specified resource doesn't support this resource operation.</p>
 *
 * @throws {@link CloudControlServiceException}
 * <p>Base exception class for all service exceptions from CloudControl service.</p>
 *
 */
export class GetResourceCommand extends $Command<
  GetResourceCommandInput,
  GetResourceCommandOutput,
  CloudControlClientResolvedConfig
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
  constructor(readonly input: GetResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceCommandInput, GetResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetResourceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudControlClient";
    const commandName = "GetResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetResourceOutputFilterSensitiveLog,
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
  private serialize(input: GetResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceCommandOutput> {
    return de_GetResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
