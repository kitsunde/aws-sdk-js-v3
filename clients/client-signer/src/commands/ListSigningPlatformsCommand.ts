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

import { ListSigningPlatformsRequest, ListSigningPlatformsResponse } from "../models/models_0";
import { de_ListSigningPlatformsCommand, se_ListSigningPlatformsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 *
 * The input for {@link ListSigningPlatformsCommand}.
 */
export interface ListSigningPlatformsCommandInput extends ListSigningPlatformsRequest {}
/**
 * @public
 *
 * The output of {@link ListSigningPlatformsCommand}.
 */
export interface ListSigningPlatformsCommandOutput extends ListSigningPlatformsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all signing platforms available in code signing that match the request parameters. If
 * 			additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use
 * 			this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining
 * 			values. You can continue calling <code>ListSigningJobs</code> with your
 * 				<code>maxResults</code> parameter and with new values that code signing returns in the
 * 				<code>nextToken</code> parameter until all of your signing jobs have been
 * 			returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningPlatformsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningPlatformsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // ListSigningPlatformsRequest
 *   category: "STRING_VALUE",
 *   partner: "STRING_VALUE",
 *   target: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSigningPlatformsCommand(input);
 * const response = await client.send(command);
 * // { // ListSigningPlatformsResponse
 * //   platforms: [ // SigningPlatforms
 * //     { // SigningPlatform
 * //       platformId: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       partner: "STRING_VALUE",
 * //       target: "STRING_VALUE",
 * //       category: "STRING_VALUE",
 * //       signingConfiguration: { // SigningConfiguration
 * //         encryptionAlgorithmOptions: { // EncryptionAlgorithmOptions
 * //           allowedValues: [ // EncryptionAlgorithms // required
 * //             "STRING_VALUE",
 * //           ],
 * //           defaultValue: "STRING_VALUE", // required
 * //         },
 * //         hashAlgorithmOptions: { // HashAlgorithmOptions
 * //           allowedValues: [ // HashAlgorithms // required
 * //             "STRING_VALUE",
 * //           ],
 * //           defaultValue: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       signingImageFormat: { // SigningImageFormat
 * //         supportedFormats: [ // ImageFormats // required
 * //           "STRING_VALUE",
 * //         ],
 * //         defaultFormat: "STRING_VALUE", // required
 * //       },
 * //       maxSizeInMB: Number("int"),
 * //       revocationSupported: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSigningPlatformsCommandInput - {@link ListSigningPlatformsCommandInput}
 * @returns {@link ListSigningPlatformsCommandOutput}
 * @see {@link ListSigningPlatformsCommandInput} for command's `input` shape.
 * @see {@link ListSigningPlatformsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 */
export class ListSigningPlatformsCommand extends $Command<
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput,
  SignerClientResolvedConfig
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
  constructor(readonly input: ListSigningPlatformsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSigningPlatformsCommandInput, ListSigningPlatformsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSigningPlatformsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "ListSigningPlatformsCommand";
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
  private serialize(input: ListSigningPlatformsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSigningPlatformsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSigningPlatformsCommandOutput> {
    return de_ListSigningPlatformsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
