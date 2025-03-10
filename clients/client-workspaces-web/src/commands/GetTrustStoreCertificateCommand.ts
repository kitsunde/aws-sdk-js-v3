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

import { GetTrustStoreCertificateRequest, GetTrustStoreCertificateResponse } from "../models/models_0";
import { de_GetTrustStoreCertificateCommand, se_GetTrustStoreCertificateCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 *
 * The input for {@link GetTrustStoreCertificateCommand}.
 */
export interface GetTrustStoreCertificateCommandInput extends GetTrustStoreCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreCertificateCommand}.
 */
export interface GetTrustStoreCertificateCommandOutput extends GetTrustStoreCertificateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the trust store certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetTrustStoreCertificateCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetTrustStoreCertificateCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetTrustStoreCertificateRequest
 *   trustStoreArn: "STRING_VALUE", // required
 *   thumbprint: "STRING_VALUE", // required
 * };
 * const command = new GetTrustStoreCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreCertificateResponse
 * //   trustStoreArn: "STRING_VALUE",
 * //   certificate: { // Certificate
 * //     thumbprint: "STRING_VALUE",
 * //     subject: "STRING_VALUE",
 * //     issuer: "STRING_VALUE",
 * //     notValidBefore: new Date("TIMESTAMP"),
 * //     notValidAfter: new Date("TIMESTAMP"),
 * //     body: "BLOB_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrustStoreCertificateCommandInput - {@link GetTrustStoreCertificateCommandInput}
 * @returns {@link GetTrustStoreCertificateCommandOutput}
 * @see {@link GetTrustStoreCertificateCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreCertificateCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 */
export class GetTrustStoreCertificateCommand extends $Command<
  GetTrustStoreCertificateCommandInput,
  GetTrustStoreCertificateCommandOutput,
  WorkSpacesWebClientResolvedConfig
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
  constructor(readonly input: GetTrustStoreCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTrustStoreCertificateCommandInput, GetTrustStoreCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTrustStoreCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "GetTrustStoreCertificateCommand";
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
  private serialize(input: GetTrustStoreCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTrustStoreCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTrustStoreCertificateCommandOutput> {
    return de_GetTrustStoreCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
