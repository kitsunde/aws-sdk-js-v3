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
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { ListJobsByPipelineRequest, ListJobsByPipelineResponse } from "../models/models_0";
import { de_ListJobsByPipelineCommand, se_ListJobsByPipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListJobsByPipelineCommand}.
 */
export interface ListJobsByPipelineCommandInput extends ListJobsByPipelineRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsByPipelineCommand}.
 */
export interface ListJobsByPipelineCommandOutput extends ListJobsByPipelineResponse, __MetadataBearer {}

/**
 * @public
 * <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p>
 *         <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains
 *             one element for each job that satisfies the search criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListJobsByPipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListJobsByPipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // ListJobsByPipelineRequest
 *   PipelineId: "STRING_VALUE", // required
 *   Ascending: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListJobsByPipelineCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsByPipelineResponse
 * //   Jobs: [ // Jobs
 * //     { // Job
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       PipelineId: "STRING_VALUE",
 * //       Input: { // JobInput
 * //         Key: "STRING_VALUE",
 * //         FrameRate: "STRING_VALUE",
 * //         Resolution: "STRING_VALUE",
 * //         AspectRatio: "STRING_VALUE",
 * //         Interlaced: "STRING_VALUE",
 * //         Container: "STRING_VALUE",
 * //         Encryption: { // Encryption
 * //           Mode: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           KeyMd5: "STRING_VALUE",
 * //           InitializationVector: "STRING_VALUE",
 * //         },
 * //         TimeSpan: { // TimeSpan
 * //           StartTime: "STRING_VALUE",
 * //           Duration: "STRING_VALUE",
 * //         },
 * //         InputCaptions: { // InputCaptions
 * //           MergePolicy: "STRING_VALUE",
 * //           CaptionSources: [ // CaptionSources
 * //             { // CaptionSource
 * //               Key: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               TimeOffset: "STRING_VALUE",
 * //               Label: "STRING_VALUE",
 * //               Encryption: {
 * //                 Mode: "STRING_VALUE",
 * //                 Key: "STRING_VALUE",
 * //                 KeyMd5: "STRING_VALUE",
 * //                 InitializationVector: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         DetectedProperties: { // DetectedProperties
 * //           Width: Number("int"),
 * //           Height: Number("int"),
 * //           FrameRate: "STRING_VALUE",
 * //           FileSize: Number("long"),
 * //           DurationMillis: Number("long"),
 * //         },
 * //       },
 * //       Inputs: [ // JobInputs
 * //         {
 * //           Key: "STRING_VALUE",
 * //           FrameRate: "STRING_VALUE",
 * //           Resolution: "STRING_VALUE",
 * //           AspectRatio: "STRING_VALUE",
 * //           Interlaced: "STRING_VALUE",
 * //           Container: "STRING_VALUE",
 * //           Encryption: "<Encryption>",
 * //           TimeSpan: {
 * //             StartTime: "STRING_VALUE",
 * //             Duration: "STRING_VALUE",
 * //           },
 * //           InputCaptions: {
 * //             MergePolicy: "STRING_VALUE",
 * //             CaptionSources: [
 * //               {
 * //                 Key: "STRING_VALUE",
 * //                 Language: "STRING_VALUE",
 * //                 TimeOffset: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 Encryption: "<Encryption>",
 * //               },
 * //             ],
 * //           },
 * //           DetectedProperties: {
 * //             Width: Number("int"),
 * //             Height: Number("int"),
 * //             FrameRate: "STRING_VALUE",
 * //             FileSize: Number("long"),
 * //             DurationMillis: Number("long"),
 * //           },
 * //         },
 * //       ],
 * //       Output: { // JobOutput
 * //         Id: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         ThumbnailPattern: "STRING_VALUE",
 * //         ThumbnailEncryption: "<Encryption>",
 * //         Rotate: "STRING_VALUE",
 * //         PresetId: "STRING_VALUE",
 * //         SegmentDuration: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         StatusDetail: "STRING_VALUE",
 * //         Duration: Number("long"),
 * //         Width: Number("int"),
 * //         Height: Number("int"),
 * //         FrameRate: "STRING_VALUE",
 * //         FileSize: Number("long"),
 * //         DurationMillis: Number("long"),
 * //         Watermarks: [ // JobWatermarks
 * //           { // JobWatermark
 * //             PresetWatermarkId: "STRING_VALUE",
 * //             InputKey: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //         AlbumArt: { // JobAlbumArt
 * //           MergePolicy: "STRING_VALUE",
 * //           Artwork: [ // Artworks
 * //             { // Artwork
 * //               InputKey: "STRING_VALUE",
 * //               MaxWidth: "STRING_VALUE",
 * //               MaxHeight: "STRING_VALUE",
 * //               SizingPolicy: "STRING_VALUE",
 * //               PaddingPolicy: "STRING_VALUE",
 * //               AlbumArtFormat: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //         },
 * //         Composition: [ // Composition
 * //           { // Clip
 * //             TimeSpan: "<TimeSpan>",
 * //           },
 * //         ],
 * //         Captions: { // Captions
 * //           MergePolicy: "STRING_VALUE",
 * //           CaptionSources: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               TimeOffset: "STRING_VALUE",
 * //               Label: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //           CaptionFormats: [ // CaptionFormats
 * //             { // CaptionFormat
 * //               Format: "STRING_VALUE",
 * //               Pattern: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //         },
 * //         Encryption: "<Encryption>",
 * //         AppliedColorSpaceConversion: "STRING_VALUE",
 * //       },
 * //       Outputs: [ // JobOutputs
 * //         {
 * //           Id: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           ThumbnailPattern: "STRING_VALUE",
 * //           ThumbnailEncryption: "<Encryption>",
 * //           Rotate: "STRING_VALUE",
 * //           PresetId: "STRING_VALUE",
 * //           SegmentDuration: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           StatusDetail: "STRING_VALUE",
 * //           Duration: Number("long"),
 * //           Width: Number("int"),
 * //           Height: Number("int"),
 * //           FrameRate: "STRING_VALUE",
 * //           FileSize: Number("long"),
 * //           DurationMillis: Number("long"),
 * //           Watermarks: [
 * //             {
 * //               PresetWatermarkId: "STRING_VALUE",
 * //               InputKey: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //           AlbumArt: {
 * //             MergePolicy: "STRING_VALUE",
 * //             Artwork: [
 * //               {
 * //                 InputKey: "STRING_VALUE",
 * //                 MaxWidth: "STRING_VALUE",
 * //                 MaxHeight: "STRING_VALUE",
 * //                 SizingPolicy: "STRING_VALUE",
 * //                 PaddingPolicy: "STRING_VALUE",
 * //                 AlbumArtFormat: "STRING_VALUE",
 * //                 Encryption: "<Encryption>",
 * //               },
 * //             ],
 * //           },
 * //           Composition: [
 * //             {
 * //               TimeSpan: "<TimeSpan>",
 * //             },
 * //           ],
 * //           Captions: {
 * //             MergePolicy: "STRING_VALUE",
 * //             CaptionSources: [
 * //               {
 * //                 Key: "STRING_VALUE",
 * //                 Language: "STRING_VALUE",
 * //                 TimeOffset: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 Encryption: "<Encryption>",
 * //               },
 * //             ],
 * //             CaptionFormats: [
 * //               {
 * //                 Format: "STRING_VALUE",
 * //                 Pattern: "STRING_VALUE",
 * //                 Encryption: "<Encryption>",
 * //               },
 * //             ],
 * //           },
 * //           Encryption: "<Encryption>",
 * //           AppliedColorSpaceConversion: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OutputKeyPrefix: "STRING_VALUE",
 * //       Playlists: [ // Playlists
 * //         { // Playlist
 * //           Name: "STRING_VALUE",
 * //           Format: "STRING_VALUE",
 * //           OutputKeys: [ // OutputKeys
 * //             "STRING_VALUE",
 * //           ],
 * //           HlsContentProtection: { // HlsContentProtection
 * //             Method: "STRING_VALUE",
 * //             Key: "STRING_VALUE",
 * //             KeyMd5: "STRING_VALUE",
 * //             InitializationVector: "STRING_VALUE",
 * //             LicenseAcquisitionUrl: "STRING_VALUE",
 * //             KeyStoragePolicy: "STRING_VALUE",
 * //           },
 * //           PlayReadyDrm: { // PlayReadyDrm
 * //             Format: "STRING_VALUE",
 * //             Key: "STRING_VALUE",
 * //             KeyMd5: "STRING_VALUE",
 * //             KeyId: "STRING_VALUE",
 * //             InitializationVector: "STRING_VALUE",
 * //             LicenseAcquisitionUrl: "STRING_VALUE",
 * //           },
 * //           Status: "STRING_VALUE",
 * //           StatusDetail: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       UserMetadata: { // UserMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Timing: { // Timing
 * //         SubmitTimeMillis: Number("long"),
 * //         StartTimeMillis: Number("long"),
 * //         FinishTimeMillis: Number("long"),
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsByPipelineCommandInput - {@link ListJobsByPipelineCommandInput}
 * @returns {@link ListJobsByPipelineCommandOutput}
 * @see {@link ListJobsByPipelineCommandInput} for command's `input` shape.
 * @see {@link ListJobsByPipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 */
export class ListJobsByPipelineCommand extends $Command<
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput,
  ElasticTranscoderClientResolvedConfig
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
  constructor(readonly input: ListJobsByPipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsByPipelineCommandInput, ListJobsByPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListJobsByPipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ListJobsByPipelineCommand";
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
  private serialize(input: ListJobsByPipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListJobsByPipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsByPipelineCommandOutput> {
    return de_ListJobsByPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
