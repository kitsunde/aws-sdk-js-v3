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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import {
  UpdateHypervisorInput,
  UpdateHypervisorInputFilterSensitiveLog,
  UpdateHypervisorOutput,
} from "../models/models_0";
import { de_UpdateHypervisorCommand, se_UpdateHypervisorCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link UpdateHypervisorCommand}.
 */
export interface UpdateHypervisorCommandInput extends UpdateHypervisorInput {}
/**
 * @public
 *
 * The output of {@link UpdateHypervisorCommand}.
 */
export interface UpdateHypervisorCommandOutput extends UpdateHypervisorOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates a hypervisor metadata, including its host, username, and password. Specify which
 *       hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your
 *       request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, UpdateHypervisorCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, UpdateHypervisorCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // UpdateHypervisorInput
 *   HypervisorArn: "STRING_VALUE", // required
 *   Host: "STRING_VALUE",
 *   Username: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   LogGroupArn: "STRING_VALUE",
 * };
 * const command = new UpdateHypervisorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHypervisorOutput
 * //   HypervisorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateHypervisorCommandInput - {@link UpdateHypervisorCommandInput}
 * @returns {@link UpdateHypervisorCommandOutput}
 * @see {@link UpdateHypervisorCommandInput} for command's `input` shape.
 * @see {@link UpdateHypervisorCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation cannot proceed because you have insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The operation cannot proceed because it is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 */
export class UpdateHypervisorCommand extends $Command<
  UpdateHypervisorCommandInput,
  UpdateHypervisorCommandOutput,
  BackupGatewayClientResolvedConfig
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
  constructor(readonly input: UpdateHypervisorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateHypervisorCommandInput, UpdateHypervisorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateHypervisorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "UpdateHypervisorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHypervisorInputFilterSensitiveLog,
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
  private serialize(input: UpdateHypervisorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateHypervisorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHypervisorCommandOutput> {
    return de_UpdateHypervisorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
