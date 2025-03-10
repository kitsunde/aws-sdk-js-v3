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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListUseCasesRequest, ListUseCasesResponse } from "../models/models_1";
import { de_ListUseCasesCommand, se_ListUseCasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListUseCasesCommand}.
 */
export interface ListUseCasesCommandInput extends ListUseCasesRequest {}
/**
 * @public
 *
 * The output of {@link ListUseCasesCommand}.
 */
export interface ListUseCasesCommandOutput extends ListUseCasesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the use cases for the integration association. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListUseCasesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListUseCasesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListUseCasesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   IntegrationAssociationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListUseCasesCommand(input);
 * const response = await client.send(command);
 * // { // ListUseCasesResponse
 * //   UseCaseSummaryList: [ // UseCaseSummaryList
 * //     { // UseCase
 * //       UseCaseId: "STRING_VALUE",
 * //       UseCaseArn: "STRING_VALUE",
 * //       UseCaseType: "RULES_EVALUATION" || "CONNECT_CAMPAIGNS",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUseCasesCommandInput - {@link ListUseCasesCommandInput}
 * @returns {@link ListUseCasesCommandOutput}
 * @see {@link ListUseCasesCommandInput} for command's `input` shape.
 * @see {@link ListUseCasesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListUseCasesCommand extends $Command<
  ListUseCasesCommandInput,
  ListUseCasesCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListUseCasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUseCasesCommandInput, ListUseCasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListUseCasesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListUseCasesCommand";
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
  private serialize(input: ListUseCasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListUseCasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUseCasesCommandOutput> {
    return de_ListUseCasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
