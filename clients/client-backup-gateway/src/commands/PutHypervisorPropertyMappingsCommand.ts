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
import { PutHypervisorPropertyMappingsInput, PutHypervisorPropertyMappingsOutput } from "../models/models_0";
import {
  de_PutHypervisorPropertyMappingsCommand,
  se_PutHypervisorPropertyMappingsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link PutHypervisorPropertyMappingsCommand}.
 */
export interface PutHypervisorPropertyMappingsCommandInput extends PutHypervisorPropertyMappingsInput {}
/**
 * @public
 *
 * The output of {@link PutHypervisorPropertyMappingsCommand}.
 */
export interface PutHypervisorPropertyMappingsCommandOutput
  extends PutHypervisorPropertyMappingsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>This action sets the property mappings for the specified hypervisor.
 *       A hypervisor property mapping displays the relationship of entity properties
 *       available from the on-premises hypervisor to the properties available in Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, PutHypervisorPropertyMappingsCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, PutHypervisorPropertyMappingsCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // PutHypervisorPropertyMappingsInput
 *   HypervisorArn: "STRING_VALUE", // required
 *   VmwareToAwsTagMappings: [ // VmwareToAwsTagMappings // required
 *     { // VmwareToAwsTagMapping
 *       VmwareCategory: "STRING_VALUE", // required
 *       VmwareTagName: "STRING_VALUE", // required
 *       AwsTagKey: "STRING_VALUE", // required
 *       AwsTagValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   IamRoleArn: "STRING_VALUE", // required
 * };
 * const command = new PutHypervisorPropertyMappingsCommand(input);
 * const response = await client.send(command);
 * // { // PutHypervisorPropertyMappingsOutput
 * //   HypervisorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutHypervisorPropertyMappingsCommandInput - {@link PutHypervisorPropertyMappingsCommandInput}
 * @returns {@link PutHypervisorPropertyMappingsCommandOutput}
 * @see {@link PutHypervisorPropertyMappingsCommandInput} for command's `input` shape.
 * @see {@link PutHypervisorPropertyMappingsCommandOutput} for command's `response` shape.
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
export class PutHypervisorPropertyMappingsCommand extends $Command<
  PutHypervisorPropertyMappingsCommandInput,
  PutHypervisorPropertyMappingsCommandOutput,
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
  constructor(readonly input: PutHypervisorPropertyMappingsCommandInput) {
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
  ): Handler<PutHypervisorPropertyMappingsCommandInput, PutHypervisorPropertyMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutHypervisorPropertyMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "PutHypervisorPropertyMappingsCommand";
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
  private serialize(input: PutHypervisorPropertyMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutHypervisorPropertyMappingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutHypervisorPropertyMappingsCommandOutput> {
    return de_PutHypervisorPropertyMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
