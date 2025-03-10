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

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ImportKeyMaterialRequest, ImportKeyMaterialResponse } from "../models/models_0";
import { de_ImportKeyMaterialCommand, se_ImportKeyMaterialCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ImportKeyMaterialCommand}.
 */
export interface ImportKeyMaterialCommandInput extends ImportKeyMaterialRequest {}
/**
 * @public
 *
 * The output of {@link ImportKeyMaterialCommand}.
 */
export interface ImportKeyMaterialCommandOutput extends ImportKeyMaterialResponse, __MetadataBearer {}

/**
 * @public
 * <p>Imports key material into an existing symmetric encryption KMS key that was created
 *       without key material. After you successfully import key material into a KMS key, you can
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport the same key material</a> into that KMS key, but you cannot import different
 *       key material. </p>
 *          <p>You cannot perform this operation on an asymmetric KMS key, an HMAC KMS key, or on any KMS key in a different Amazon Web Services account. For more information about creating KMS keys with no key material
 *       and then importing key material, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>Before using this operation, call <a>GetParametersForImport</a>. Its response
 *       includes a public key and an import token. Use the public key to encrypt the key material.
 *       Then, submit the import token from the same <code>GetParametersForImport</code>
 *       response.</p>
 *          <p>When calling this operation, you must specify the following values:</p>
 *          <ul>
 *             <li>
 *                <p>The key ID or key ARN of a KMS key with no key material. Its <code>Origin</code> must
 *           be <code>EXTERNAL</code>.</p>
 *                <p>To create a KMS key with no key material, call <a>CreateKey</a> and set the
 *           value of its <code>Origin</code> parameter to <code>EXTERNAL</code>. To get the
 *             <code>Origin</code> of a KMS key, call <a>DescribeKey</a>.)</p>
 *             </li>
 *             <li>
 *                <p>The encrypted key material. To get the public key to encrypt the key material, call
 *             <a>GetParametersForImport</a>.</p>
 *             </li>
 *             <li>
 *                <p>The import token that <a>GetParametersForImport</a> returned. You must use
 *           a public key and token from the same <code>GetParametersForImport</code> response.</p>
 *             </li>
 *             <li>
 *                <p>Whether the key material expires (<code>ExpirationModel</code>) and, if so, when
 *             (<code>ValidTo</code>). If you set an expiration date, on the specified date, KMS
 *           deletes the key material from the KMS key, making the KMS key unusable. To use the KMS key
 *           in cryptographic operations again, you must reimport the same key material. The only way
 *           to change the expiration model or expiration date is by reimporting the same key material
 *           and specifying a new expiration date. </p>
 *             </li>
 *          </ul>
 *          <p>When this operation is successful, the key state of the KMS key changes from
 *         <code>PendingImport</code> to <code>Enabled</code>, and you can use the KMS key.</p>
 *          <p>If this operation fails, use the exception to help determine the problem. If the error is
 *       related to the key material, the import token, or wrapping key, use <a>GetParametersForImport</a> to get a new public key and import token for the KMS key
 *       and repeat the import procedure. For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#importing-keys-overview">How To Import Key
 *         Material</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ImportKeyMaterial</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteImportedKeyMaterial</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetParametersForImport</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ImportKeyMaterialCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ImportKeyMaterialCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ImportKeyMaterialRequest
 *   KeyId: "STRING_VALUE", // required
 *   ImportToken: "BLOB_VALUE", // required
 *   EncryptedKeyMaterial: "BLOB_VALUE", // required
 *   ValidTo: new Date("TIMESTAMP"),
 *   ExpirationModel: "KEY_MATERIAL_EXPIRES" || "KEY_MATERIAL_DOES_NOT_EXPIRE",
 * };
 * const command = new ImportKeyMaterialCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ImportKeyMaterialCommandInput - {@link ImportKeyMaterialCommandInput}
 * @returns {@link ImportKeyMaterialCommandOutput}
 * @see {@link ImportKeyMaterialCommandInput} for command's `input` shape.
 * @see {@link ImportKeyMaterialCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link ExpiredImportTokenException} (client fault)
 *  <p>The request was rejected because the specified import token is expired. Use <a>GetParametersForImport</a> to get a new import token and public key, use the new
 *       public key to encrypt the key material, and then try the request again.</p>
 *
 * @throws {@link IncorrectKeyMaterialException} (client fault)
 *  <p>The request was rejected because the key material in the request is, expired, invalid, or
 *       is not the same key material that was previously imported into this KMS key.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link InvalidCiphertextException} (client fault)
 *  <p>From the <a>Decrypt</a> or <a>ReEncrypt</a> operation, the request
 *       was rejected because the specified ciphertext, or additional authenticated data incorporated
 *       into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise
 *       invalid.</p>
 *          <p>From the <a>ImportKeyMaterial</a> operation, the request was rejected because
 *       KMS could not decrypt the encrypted (wrapped) key material. </p>
 *
 * @throws {@link InvalidImportTokenException} (client fault)
 *  <p>The request was rejected because the provided import token is invalid or is associated
 *       with a different KMS key.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception represents a general failure with many possible causes. To identify the cause, see the error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To import key material into a KMS key
 * ```javascript
 * // The following example imports key material into the specified KMS key.
 * const input = {
 *   "EncryptedKeyMaterial": "<binary data>",
 *   "ExpirationModel": "KEY_MATERIAL_DOES_NOT_EXPIRE",
 *   "ImportToken": "<binary data>",
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new ImportKeyMaterialCommand(input);
 * await client.send(command);
 * // example id: to-import-key-material-into-a-cmk-1480630551969
 * ```
 *
 */
export class ImportKeyMaterialCommand extends $Command<
  ImportKeyMaterialCommandInput,
  ImportKeyMaterialCommandOutput,
  KMSClientResolvedConfig
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
  constructor(readonly input: ImportKeyMaterialCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportKeyMaterialCommandInput, ImportKeyMaterialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportKeyMaterialCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ImportKeyMaterialCommand";
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
  private serialize(input: ImportKeyMaterialCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportKeyMaterialCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportKeyMaterialCommandOutput> {
    return de_ImportKeyMaterialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
