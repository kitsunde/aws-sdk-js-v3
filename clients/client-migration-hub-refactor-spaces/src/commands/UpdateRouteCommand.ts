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
  MigrationHubRefactorSpacesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubRefactorSpacesClient";
import { UpdateRouteRequest, UpdateRouteResponse } from "../models/models_0";
import { de_UpdateRouteCommand, se_UpdateRouteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateRouteCommand}.
 */
export interface UpdateRouteCommandInput extends UpdateRouteRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRouteCommand}.
 */
export interface UpdateRouteCommandOutput extends UpdateRouteResponse, __MetadataBearer {}

/**
 * @public
 * <p> Updates an Amazon Web Services Migration Hub Refactor Spaces route. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, UpdateRouteCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, UpdateRouteCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // UpdateRouteRequest
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   RouteIdentifier: "STRING_VALUE", // required
 *   ActivationState: "STRING_VALUE", // required
 * };
 * const command = new UpdateRouteCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRouteResponse
 * //   RouteId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   ServiceId: "STRING_VALUE",
 * //   ApplicationId: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateRouteCommandInput - {@link UpdateRouteCommandInput}
 * @returns {@link UpdateRouteCommandOutput}
 * @see {@link UpdateRouteCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied because the request was throttled. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Service.
 *     </p>
 *
 * @throws {@link MigrationHubRefactorSpacesServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubRefactorSpaces service.</p>
 *
 */
export class UpdateRouteCommand extends $Command<
  UpdateRouteCommandInput,
  UpdateRouteCommandOutput,
  MigrationHubRefactorSpacesClientResolvedConfig
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
  constructor(readonly input: UpdateRouteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubRefactorSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRouteCommandInput, UpdateRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateRouteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubRefactorSpacesClient";
    const commandName = "UpdateRouteCommand";
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
  private serialize(input: UpdateRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRouteCommandOutput> {
    return de_UpdateRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
