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

import { ExecuteProvisionedProductPlanInput, ExecuteProvisionedProductPlanOutput } from "../models/models_0";
import {
  de_ExecuteProvisionedProductPlanCommand,
  se_ExecuteProvisionedProductPlanCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 *
 * The input for {@link ExecuteProvisionedProductPlanCommand}.
 */
export interface ExecuteProvisionedProductPlanCommandInput extends ExecuteProvisionedProductPlanInput {}
/**
 * @public
 *
 * The output of {@link ExecuteProvisionedProductPlanCommand}.
 */
export interface ExecuteProvisionedProductPlanCommandOutput
  extends ExecuteProvisionedProductPlanOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Provisions or modifies a product based on the resource changes for the specified plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ExecuteProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ExecuteProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ExecuteProvisionedProductPlanInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PlanId: "STRING_VALUE", // required
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new ExecuteProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteProvisionedProductPlanOutput
 * //   RecordDetail: { // RecordDetail
 * //     RecordId: "STRING_VALUE",
 * //     ProvisionedProductName: "STRING_VALUE",
 * //     Status: "CREATED" || "IN_PROGRESS" || "IN_PROGRESS_IN_ERROR" || "SUCCEEDED" || "FAILED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     ProvisionedProductType: "STRING_VALUE",
 * //     RecordType: "STRING_VALUE",
 * //     ProvisionedProductId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     PathId: "STRING_VALUE",
 * //     RecordErrors: [ // RecordErrors
 * //       { // RecordError
 * //         Code: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RecordTags: [ // RecordTags
 * //       { // RecordTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExecuteProvisionedProductPlanCommandInput - {@link ExecuteProvisionedProductPlanCommandInput}
 * @returns {@link ExecuteProvisionedProductPlanCommandOutput}
 * @see {@link ExecuteProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link ExecuteProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class ExecuteProvisionedProductPlanCommand extends $Command<
  ExecuteProvisionedProductPlanCommandInput,
  ExecuteProvisionedProductPlanCommandOutput,
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
  constructor(readonly input: ExecuteProvisionedProductPlanCommandInput) {
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
  ): Handler<ExecuteProvisionedProductPlanCommandInput, ExecuteProvisionedProductPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteProvisionedProductPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ExecuteProvisionedProductPlanCommand";
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
  private serialize(input: ExecuteProvisionedProductPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteProvisionedProductPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExecuteProvisionedProductPlanCommandOutput> {
    return de_ExecuteProvisionedProductPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
