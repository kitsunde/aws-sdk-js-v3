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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetRegistryInput, GetRegistryResponse } from "../models/models_1";
import { de_GetRegistryCommand, se_GetRegistryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetRegistryCommand}.
 */
export interface GetRegistryCommandInput extends GetRegistryInput {}
/**
 * @public
 *
 * The output of {@link GetRegistryCommand}.
 */
export interface GetRegistryCommandOutput extends GetRegistryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified registry in detail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetRegistryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetRegistryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetRegistryInput
 *   RegistryId: { // RegistryId
 *     RegistryName: "STRING_VALUE",
 *     RegistryArn: "STRING_VALUE",
 *   },
 * };
 * const command = new GetRegistryCommand(input);
 * const response = await client.send(command);
 * // { // GetRegistryResponse
 * //   RegistryName: "STRING_VALUE",
 * //   RegistryArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Status: "AVAILABLE" || "DELETING",
 * //   CreatedTime: "STRING_VALUE",
 * //   UpdatedTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRegistryCommandInput - {@link GetRegistryCommandInput}
 * @returns {@link GetRegistryCommandOutput}
 * @see {@link GetRegistryCommandInput} for command's `input` shape.
 * @see {@link GetRegistryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetRegistryCommand extends $Command<
  GetRegistryCommandInput,
  GetRegistryCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetRegistryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRegistryCommandInput, GetRegistryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRegistryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetRegistryCommand";
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
  private serialize(input: GetRegistryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRegistryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRegistryCommandOutput> {
    return de_GetRegistryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
