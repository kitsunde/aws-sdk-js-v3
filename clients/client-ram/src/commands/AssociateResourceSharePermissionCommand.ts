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

import { AssociateResourceSharePermissionRequest, AssociateResourceSharePermissionResponse } from "../models/models_0";
import {
  de_AssociateResourceSharePermissionCommand,
  se_AssociateResourceSharePermissionCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 *
 * The input for {@link AssociateResourceSharePermissionCommand}.
 */
export interface AssociateResourceSharePermissionCommandInput extends AssociateResourceSharePermissionRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResourceSharePermissionCommand}.
 */
export interface AssociateResourceSharePermissionCommandOutput
  extends AssociateResourceSharePermissionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds or replaces the RAM permission for a resource type included in a resource share. You can
 *             have exactly one permission associated with each resource type in the resource share. You can add
 *             a new RAM permission only if there are currently no resources of that resource type
 *             currently in the resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // AssociateResourceSharePermissionRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   permissionArn: "STRING_VALUE", // required
 *   replace: true || false,
 *   clientToken: "STRING_VALUE",
 *   permissionVersion: Number("int"),
 * };
 * const command = new AssociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * // { // AssociateResourceSharePermissionResponse
 * //   returnValue: true || false,
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateResourceSharePermissionCommandInput - {@link AssociateResourceSharePermissionCommandInput}
 * @returns {@link AssociateResourceSharePermissionCommandOutput}
 * @see {@link AssociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class AssociateResourceSharePermissionCommand extends $Command<
  AssociateResourceSharePermissionCommandInput,
  AssociateResourceSharePermissionCommandOutput,
  RAMClientResolvedConfig
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
  constructor(readonly input: AssociateResourceSharePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateResourceSharePermissionCommandInput, AssociateResourceSharePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateResourceSharePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "AssociateResourceSharePermissionCommand";
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
  private serialize(
    input: AssociateResourceSharePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateResourceSharePermissionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateResourceSharePermissionCommandOutput> {
    return de_AssociateResourceSharePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
