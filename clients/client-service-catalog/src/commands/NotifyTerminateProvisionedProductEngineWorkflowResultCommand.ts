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
  NotifyTerminateProvisionedProductEngineWorkflowResultInput,
  NotifyTerminateProvisionedProductEngineWorkflowResultOutput,
} from "../models/models_0";
import {
  de_NotifyTerminateProvisionedProductEngineWorkflowResultCommand,
  se_NotifyTerminateProvisionedProductEngineWorkflowResultCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 *
 * The input for {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommand}.
 */
export interface NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput
  extends NotifyTerminateProvisionedProductEngineWorkflowResultInput {}
/**
 * @public
 *
 * The output of {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommand}.
 */
export interface NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput
  extends NotifyTerminateProvisionedProductEngineWorkflowResultOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          Notifies the result
 *          of the terminate engine execution.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, NotifyTerminateProvisionedProductEngineWorkflowResultCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, NotifyTerminateProvisionedProductEngineWorkflowResultCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // NotifyTerminateProvisionedProductEngineWorkflowResultInput
 *   WorkflowToken: "STRING_VALUE", // required
 *   RecordId: "STRING_VALUE", // required
 *   Status: "SUCCEEDED" || "FAILED", // required
 *   FailureReason: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new NotifyTerminateProvisionedProductEngineWorkflowResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput - {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput}
 * @returns {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput}
 * @see {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput} for command's `input` shape.
 * @see {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class NotifyTerminateProvisionedProductEngineWorkflowResultCommand extends $Command<
  NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
  NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput,
  ServiceCatalogClientResolvedConfig
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
  constructor(readonly input: NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
    NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        NotifyTerminateProvisionedProductEngineWorkflowResultCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "NotifyTerminateProvisionedProductEngineWorkflowResultCommand";
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
    input: NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_NotifyTerminateProvisionedProductEngineWorkflowResultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput> {
    return de_NotifyTerminateProvisionedProductEngineWorkflowResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
