// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RequiredFlag = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type RequiredFlag = (typeof RequiredFlag)[keyof typeof RequiredFlag];

/**
 * @public
 * Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions.
 */
export interface AllowedRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   */
  Height?: number;

  /**
   * Set to ENABLED to force a rendition to be included.
   */
  Required?: RequiredFlag | string;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   */
  Width?: number;
}

/**
 * @public
 * @enum
 */
export const AudioChannelTag = {
  C: "C",
  CS: "CS",
  L: "L",
  LC: "LC",
  LFE: "LFE",
  LS: "LS",
  LSD: "LSD",
  R: "R",
  RC: "RC",
  RS: "RS",
  RSD: "RSD",
  TCS: "TCS",
  VHC: "VHC",
  VHL: "VHL",
  VHR: "VHR",
} as const;

/**
 * @public
 */
export type AudioChannelTag = (typeof AudioChannelTag)[keyof typeof AudioChannelTag];

/**
 * @public
 * When you mimic a multi-channel audio layout with multiple mono-channel tracks, you can tag each channel layout manually. For example, you would tag the tracks that contain your left, right, and center audio with Left (L), Right (R), and Center (C), respectively. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use audio layout tagging, your output must be in a QuickTime (.mov) container; your audio codec must be AAC, WAV, or AIFF; and you must set up your audio track to have only one channel.
 */
export interface AudioChannelTaggingSettings {
  /**
   * You can add a tag for this mono-channel audio track to mimic its placement in a multi-channel layout. For example, if this track is the left surround channel, choose Left surround (LS).
   */
  ChannelTag?: AudioChannelTag | string;
}

/**
 * @public
 * @enum
 */
export const AudioNormalizationAlgorithm = {
  ITU_BS_1770_1: "ITU_BS_1770_1",
  ITU_BS_1770_2: "ITU_BS_1770_2",
  ITU_BS_1770_3: "ITU_BS_1770_3",
  ITU_BS_1770_4: "ITU_BS_1770_4",
} as const;

/**
 * @public
 */
export type AudioNormalizationAlgorithm =
  (typeof AudioNormalizationAlgorithm)[keyof typeof AudioNormalizationAlgorithm];

/**
 * @public
 * @enum
 */
export const AudioNormalizationAlgorithmControl = {
  CORRECT_AUDIO: "CORRECT_AUDIO",
  MEASURE_ONLY: "MEASURE_ONLY",
} as const;

/**
 * @public
 */
export type AudioNormalizationAlgorithmControl =
  (typeof AudioNormalizationAlgorithmControl)[keyof typeof AudioNormalizationAlgorithmControl];

/**
 * @public
 * @enum
 */
export const AudioNormalizationLoudnessLogging = {
  DONT_LOG: "DONT_LOG",
  LOG: "LOG",
} as const;

/**
 * @public
 */
export type AudioNormalizationLoudnessLogging =
  (typeof AudioNormalizationLoudnessLogging)[keyof typeof AudioNormalizationLoudnessLogging];

/**
 * @public
 * @enum
 */
export const AudioNormalizationPeakCalculation = {
  NONE: "NONE",
  TRUE_PEAK: "TRUE_PEAK",
} as const;

/**
 * @public
 */
export type AudioNormalizationPeakCalculation =
  (typeof AudioNormalizationPeakCalculation)[keyof typeof AudioNormalizationPeakCalculation];

/**
 * @public
 * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
 */
export interface AudioNormalizationSettings {
  /**
   * Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.
   */
  Algorithm?: AudioNormalizationAlgorithm | string;

  /**
   * When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | string;

  /**
   * Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected.
   */
  CorrectionGateLevel?: number;

  /**
   * If set to LOG, log each output's audio track loudness to a CSV file.
   */
  LoudnessLogging?: AudioNormalizationLoudnessLogging | string;

  /**
   * If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.
   */
  PeakCalculation?: AudioNormalizationPeakCalculation | string;

  /**
   * When you use Audio normalization (AudioNormalizationSettings), optionally use this setting to specify a target loudness. If you don't specify a value here, the encoder chooses a value for you, based on the algorithm that you choose for Algorithm (algorithm). If you choose algorithm 1770-1, the encoder will choose -24 LKFS; otherwise, the encoder will choose -23 LKFS.
   */
  TargetLkfs?: number;

  /**
   * Specify the True-peak limiter threshold in decibels relative to full scale (dBFS). The peak inter-audio sample loudness in your output will be limited to the value that you specify, without affecting the overall target LKFS. Enter a value from 0 to -8. Leave blank to use the default value 0.
   */
  TruePeakLimiterThreshold?: number;
}

/**
 * @public
 * @enum
 */
export const AudioTypeControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;

/**
 * @public
 */
export type AudioTypeControl = (typeof AudioTypeControl)[keyof typeof AudioTypeControl];

/**
 * @public
 * @enum
 */
export const AacAudioDescriptionBroadcasterMix = {
  BROADCASTER_MIXED_AD: "BROADCASTER_MIXED_AD",
  NORMAL: "NORMAL",
} as const;

/**
 * @public
 */
export type AacAudioDescriptionBroadcasterMix =
  (typeof AacAudioDescriptionBroadcasterMix)[keyof typeof AacAudioDescriptionBroadcasterMix];

/**
 * @public
 * @enum
 */
export const AacCodecProfile = {
  HEV1: "HEV1",
  HEV2: "HEV2",
  LC: "LC",
} as const;

/**
 * @public
 */
export type AacCodecProfile = (typeof AacCodecProfile)[keyof typeof AacCodecProfile];

/**
 * @public
 * @enum
 */
export const AacCodingMode = {
  AD_RECEIVER_MIX: "AD_RECEIVER_MIX",
  CODING_MODE_1_0: "CODING_MODE_1_0",
  CODING_MODE_1_1: "CODING_MODE_1_1",
  CODING_MODE_2_0: "CODING_MODE_2_0",
  CODING_MODE_5_1: "CODING_MODE_5_1",
} as const;

/**
 * @public
 */
export type AacCodingMode = (typeof AacCodingMode)[keyof typeof AacCodingMode];

/**
 * @public
 * @enum
 */
export const AacRateControlMode = {
  CBR: "CBR",
  VBR: "VBR",
} as const;

/**
 * @public
 */
export type AacRateControlMode = (typeof AacRateControlMode)[keyof typeof AacRateControlMode];

/**
 * @public
 * @enum
 */
export const AacRawFormat = {
  LATM_LOAS: "LATM_LOAS",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AacRawFormat = (typeof AacRawFormat)[keyof typeof AacRawFormat];

/**
 * @public
 * @enum
 */
export const AacSpecification = {
  MPEG2: "MPEG2",
  MPEG4: "MPEG4",
} as const;

/**
 * @public
 */
export type AacSpecification = (typeof AacSpecification)[keyof typeof AacSpecification];

/**
 * @public
 * @enum
 */
export const AacVbrQuality = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM_HIGH: "MEDIUM_HIGH",
  MEDIUM_LOW: "MEDIUM_LOW",
} as const;

/**
 * @public
 */
export type AacVbrQuality = (typeof AacVbrQuality)[keyof typeof AacVbrQuality];

/**
 * @public
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
 */
export interface AacSettings {
  /**
   * Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.
   */
  AudioDescriptionBroadcasterMix?: AacAudioDescriptionBroadcasterMix | string;

  /**
   * Specify the average bitrate in bits per second. The set of valid values for this setting is: 6000, 8000, 10000, 12000, 14000, 16000, 20000, 24000, 28000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 384000, 448000, 512000, 576000, 640000, 768000, 896000, 1024000. The value you set is also constrained by the values that you choose for Profile (codecProfile), Bitrate control mode (codingMode), and Sample rate (sampleRate). Default values depend on Bitrate control mode and Profile.
   */
  Bitrate?: number;

  /**
   * AAC Profile.
   */
  CodecProfile?: AacCodecProfile | string;

  /**
   * The Coding mode that you specify determines the number of audio channels and the audio channel layout metadata in your AAC output. Valid coding modes depend on the Rate control mode and Profile that you select. The following list shows the number of audio channels and channel layout for each coding mode. * 1.0 Audio Description (Receiver Mix): One channel, C. Includes audio description data from your stereo input. For more information see ETSI TS 101 154 Annex E. * 1.0 Mono: One channel, C. * 2.0 Stereo: Two channels, L, R. * 5.1 Surround: Five channels, C, L, R, Ls, Rs, LFE.
   */
  CodingMode?: AacCodingMode | string;

  /**
   * Rate Control Mode.
   */
  RateControlMode?: AacRateControlMode | string;

  /**
   * Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container.
   */
  RawFormat?: AacRawFormat | string;

  /**
   * Specify the Sample rate in Hz. Valid sample rates depend on the Profile and Coding mode that you select. The following list shows valid sample rates for each Profile and Coding mode. * LC Profile, Coding mode 1.0, 2.0, and Receiver Mix: 8000, 12000, 16000, 22050, 24000, 32000, 44100, 48000, 88200, 96000. * LC Profile, Coding mode 5.1: 32000, 44100, 48000, 96000. * HEV1 Profile, Coding mode 1.0 and Receiver Mix: 22050, 24000, 32000, 44100, 48000. * HEV1 Profile, Coding mode 2.0 and 5.1: 32000, 44100, 48000, 96000. * HEV2 Profile, Coding mode 2.0: 22050, 24000, 32000, 44100, 48000.
   */
  SampleRate?: number;

  /**
   * Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   */
  Specification?: AacSpecification | string;

  /**
   * VBR Quality Level - Only used if rate_control_mode is VBR.
   */
  VbrQuality?: AacVbrQuality | string;
}

/**
 * @public
 * @enum
 */
export const Ac3BitstreamMode = {
  COMMENTARY: "COMMENTARY",
  COMPLETE_MAIN: "COMPLETE_MAIN",
  DIALOGUE: "DIALOGUE",
  EMERGENCY: "EMERGENCY",
  HEARING_IMPAIRED: "HEARING_IMPAIRED",
  MUSIC_AND_EFFECTS: "MUSIC_AND_EFFECTS",
  VISUALLY_IMPAIRED: "VISUALLY_IMPAIRED",
  VOICE_OVER: "VOICE_OVER",
} as const;

/**
 * @public
 */
export type Ac3BitstreamMode = (typeof Ac3BitstreamMode)[keyof typeof Ac3BitstreamMode];

/**
 * @public
 * @enum
 */
export const Ac3CodingMode = {
  CODING_MODE_1_0: "CODING_MODE_1_0",
  CODING_MODE_1_1: "CODING_MODE_1_1",
  CODING_MODE_2_0: "CODING_MODE_2_0",
  CODING_MODE_3_2_LFE: "CODING_MODE_3_2_LFE",
} as const;

/**
 * @public
 */
export type Ac3CodingMode = (typeof Ac3CodingMode)[keyof typeof Ac3CodingMode];

/**
 * @public
 * @enum
 */
export const Ac3DynamicRangeCompressionLine = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;

/**
 * @public
 */
export type Ac3DynamicRangeCompressionLine =
  (typeof Ac3DynamicRangeCompressionLine)[keyof typeof Ac3DynamicRangeCompressionLine];

/**
 * @public
 * @enum
 */
export const Ac3DynamicRangeCompressionProfile = {
  FILM_STANDARD: "FILM_STANDARD",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Ac3DynamicRangeCompressionProfile =
  (typeof Ac3DynamicRangeCompressionProfile)[keyof typeof Ac3DynamicRangeCompressionProfile];

/**
 * @public
 * @enum
 */
export const Ac3DynamicRangeCompressionRf = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;

/**
 * @public
 */
export type Ac3DynamicRangeCompressionRf =
  (typeof Ac3DynamicRangeCompressionRf)[keyof typeof Ac3DynamicRangeCompressionRf];

/**
 * @public
 * @enum
 */
export const Ac3LfeFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Ac3LfeFilter = (typeof Ac3LfeFilter)[keyof typeof Ac3LfeFilter];

/**
 * @public
 * @enum
 */
export const Ac3MetadataControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;

/**
 * @public
 */
export type Ac3MetadataControl = (typeof Ac3MetadataControl)[keyof typeof Ac3MetadataControl];

/**
 * @public
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
 */
export interface Ac3Settings {
  /**
   * Specify the average bitrate in bits per second. The bitrate that you specify must be a multiple of 8000 within the allowed minimum and maximum values. Leave blank to use the default bitrate for the coding mode you select according ETSI TS 102 366. Valid bitrates for coding mode 1/0: Default: 96000. Minimum: 64000. Maximum: 128000. Valid bitrates for coding mode 1/1: Default: 192000. Minimum: 128000. Maximum: 384000. Valid bitrates for coding mode 2/0: Default: 192000. Minimum: 128000. Maximum: 384000. Valid bitrates for coding mode 3/2 with FLE: Default: 384000. Minimum: 384000. Maximum: 640000.
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: Ac3BitstreamMode | string;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   */
  CodingMode?: Ac3CodingMode | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   */
  DynamicRangeCompressionLine?: Ac3DynamicRangeCompressionLine | string;

  /**
   * When you want to add Dolby dynamic range compression (DRC) signaling to your output stream, we recommend that you use the mode-specific settings instead of Dynamic range compression profile (DynamicRangeCompressionProfile). The mode-specific settings are Dynamic range compression profile, line mode (dynamicRangeCompressionLine) and Dynamic range compression profile, RF mode (dynamicRangeCompressionRf). Note that when you specify values for all three settings, MediaConvert ignores the value of this setting in favor of the mode-specific settings. If you do use this setting instead of the mode-specific settings, choose None (NONE) to leave out DRC signaling. Keep the default Film standard (FILM_STANDARD) to set the profile to Dolby's film standard profile for all operating modes.
   */
  DynamicRangeCompressionProfile?: Ac3DynamicRangeCompressionProfile | string;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   */
  DynamicRangeCompressionRf?: Ac3DynamicRangeCompressionRf | string;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   */
  LfeFilter?: Ac3LfeFilter | string;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Ac3MetadataControl | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;
}

/**
 * @public
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
 */
export interface AiffSettings {
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   */
  BitDepth?: number;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   */
  Channels?: number;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;
}

/**
 * @public
 * @enum
 */
export const AudioCodec = {
  AAC: "AAC",
  AC3: "AC3",
  AIFF: "AIFF",
  EAC3: "EAC3",
  EAC3_ATMOS: "EAC3_ATMOS",
  MP2: "MP2",
  MP3: "MP3",
  OPUS: "OPUS",
  PASSTHROUGH: "PASSTHROUGH",
  VORBIS: "VORBIS",
  WAV: "WAV",
} as const;

/**
 * @public
 */
export type AudioCodec = (typeof AudioCodec)[keyof typeof AudioCodec];

/**
 * @public
 * @enum
 */
export const Eac3AtmosBitstreamMode = {
  COMPLETE_MAIN: "COMPLETE_MAIN",
} as const;

/**
 * @public
 */
export type Eac3AtmosBitstreamMode = (typeof Eac3AtmosBitstreamMode)[keyof typeof Eac3AtmosBitstreamMode];

/**
 * @public
 * @enum
 */
export const Eac3AtmosCodingMode = {
  CODING_MODE_5_1_4: "CODING_MODE_5_1_4",
  CODING_MODE_7_1_4: "CODING_MODE_7_1_4",
  CODING_MODE_9_1_6: "CODING_MODE_9_1_6",
  CODING_MODE_AUTO: "CODING_MODE_AUTO",
} as const;

/**
 * @public
 */
export type Eac3AtmosCodingMode = (typeof Eac3AtmosCodingMode)[keyof typeof Eac3AtmosCodingMode];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDialogueIntelligence = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Eac3AtmosDialogueIntelligence =
  (typeof Eac3AtmosDialogueIntelligence)[keyof typeof Eac3AtmosDialogueIntelligence];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDownmixControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Eac3AtmosDownmixControl = (typeof Eac3AtmosDownmixControl)[keyof typeof Eac3AtmosDownmixControl];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDynamicRangeCompressionLine = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;

/**
 * @public
 */
export type Eac3AtmosDynamicRangeCompressionLine =
  (typeof Eac3AtmosDynamicRangeCompressionLine)[keyof typeof Eac3AtmosDynamicRangeCompressionLine];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDynamicRangeCompressionRf = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;

/**
 * @public
 */
export type Eac3AtmosDynamicRangeCompressionRf =
  (typeof Eac3AtmosDynamicRangeCompressionRf)[keyof typeof Eac3AtmosDynamicRangeCompressionRf];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDynamicRangeControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Eac3AtmosDynamicRangeControl =
  (typeof Eac3AtmosDynamicRangeControl)[keyof typeof Eac3AtmosDynamicRangeControl];

/**
 * @public
 * @enum
 */
export const Eac3AtmosMeteringMode = {
  ITU_BS_1770_1: "ITU_BS_1770_1",
  ITU_BS_1770_2: "ITU_BS_1770_2",
  ITU_BS_1770_3: "ITU_BS_1770_3",
  ITU_BS_1770_4: "ITU_BS_1770_4",
  LEQ_A: "LEQ_A",
} as const;

/**
 * @public
 */
export type Eac3AtmosMeteringMode = (typeof Eac3AtmosMeteringMode)[keyof typeof Eac3AtmosMeteringMode];

/**
 * @public
 * @enum
 */
export const Eac3AtmosStereoDownmix = {
  DPL2: "DPL2",
  NOT_INDICATED: "NOT_INDICATED",
  STEREO: "STEREO",
  SURROUND: "SURROUND",
} as const;

/**
 * @public
 */
export type Eac3AtmosStereoDownmix = (typeof Eac3AtmosStereoDownmix)[keyof typeof Eac3AtmosStereoDownmix];

/**
 * @public
 * @enum
 */
export const Eac3AtmosSurroundExMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  NOT_INDICATED: "NOT_INDICATED",
} as const;

/**
 * @public
 */
export type Eac3AtmosSurroundExMode = (typeof Eac3AtmosSurroundExMode)[keyof typeof Eac3AtmosSurroundExMode];

/**
 * @public
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
 */
export interface Eac3AtmosSettings {
  /**
   * Specify the average bitrate for this output in bits per second. Valid values: 384k, 448k, 576k, 640k, 768k, 1024k Default value: 448k Note that MediaConvert supports 384k only with channel-based immersive (CBI) 7.1.4 and 5.1.4 inputs. For CBI 9.1.6 and other input types, MediaConvert automatically increases your output bitrate to 448k.
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: Eac3AtmosBitstreamMode | string;

  /**
   * The coding mode for Dolby Digital Plus JOC (Atmos).
   */
  CodingMode?: Eac3AtmosCodingMode | string;

  /**
   * Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.
   */
  DialogueIntelligence?: Eac3AtmosDialogueIntelligence | string;

  /**
   * Specify whether MediaConvert should use any downmix metadata from your input file. Keep the default value, Custom (SPECIFIED) to provide downmix values in your job settings. Choose Follow source (INITIALIZE_FROM_SOURCE) to use the metadata from your input. Related settings--Use these settings to specify your downmix values: Left only/Right only surround (LoRoSurroundMixLevel), Left total/Right total surround (LtRtSurroundMixLevel), Left total/Right total center (LtRtCenterMixLevel), Left only/Right only center (LoRoCenterMixLevel), and Stereo downmix (StereoDownmix). When you keep Custom (SPECIFIED) for Downmix control (DownmixControl) and you don't specify values for the related settings, MediaConvert uses default values for those settings.
   */
  DownmixControl?: Eac3AtmosDownmixControl | string;

  /**
   * Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the line operating mode. Default value: Film light (ATMOS_STORAGE_DDP_COMPR_FILM_LIGHT) Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom (SPECIFIED) for the setting Dynamic range control (DynamicRangeControl). Otherwise, MediaConvert ignores Dynamic range compression line (DynamicRangeCompressionLine). For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   */
  DynamicRangeCompressionLine?: Eac3AtmosDynamicRangeCompressionLine | string;

  /**
   * Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the RF operating mode. Default value: Film light (ATMOS_STORAGE_DDP_COMPR_FILM_LIGHT) Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom (SPECIFIED) for the setting Dynamic range control (DynamicRangeControl). Otherwise, MediaConvert ignores Dynamic range compression RF (DynamicRangeCompressionRf). For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   */
  DynamicRangeCompressionRf?: Eac3AtmosDynamicRangeCompressionRf | string;

  /**
   * Specify whether MediaConvert should use any dynamic range control metadata from your input file. Keep the default value, Custom (SPECIFIED), to provide dynamic range control values in your job settings. Choose Follow source (INITIALIZE_FROM_SOURCE) to use the metadata from your input. Related settings--Use these settings to specify your dynamic range control values: Dynamic range compression line (DynamicRangeCompressionLine) and Dynamic range compression RF (DynamicRangeCompressionRf). When you keep the value Custom (SPECIFIED) for Dynamic range control (DynamicRangeControl) and you don't specify values for the related settings, MediaConvert uses default values for those settings.
   */
  DynamicRangeControl?: Eac3AtmosDynamicRangeControl | string;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only center mix (Lo/Ro center). MediaConvert uses this value for downmixing. Default value: -3 dB (ATMOS_STORAGE_DDP_MIXLEV_MINUS_3_DB). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, MediaConvert ignores Left only/Right only center (LoRoCenterMixLevel).
   */
  LoRoCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. Default value: -3 dB (ATMOS_STORAGE_DDP_MIXLEV_MINUS_3_DB). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, MediaConvert ignores Left only/Right only surround (LoRoSurroundMixLevel).
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. Default value: -3 dB (ATMOS_STORAGE_DDP_MIXLEV_MINUS_3_DB) Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, MediaConvert ignores Left total/Right total center (LtRtCenterMixLevel).
   */
  LtRtCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. Default value: -3 dB (ATMOS_STORAGE_DDP_MIXLEV_MINUS_3_DB) Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, the service ignores Left total/Right total surround (LtRtSurroundMixLevel).
   */
  LtRtSurroundMixLevel?: number;

  /**
   * Choose how the service meters the loudness of your audio.
   */
  MeteringMode?: Eac3AtmosMeteringMode | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;

  /**
   * Specify the percentage of audio content, from 0% to 100%, that must be speech in order for the encoder to use the measured speech loudness as the overall program loudness. Default value: 15%
   */
  SpeechThreshold?: number;

  /**
   * Choose how the service does stereo downmixing. Default value: Not indicated (ATMOS_STORAGE_DDP_DMIXMOD_NOT_INDICATED) Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, MediaConvert ignores Stereo downmix (StereoDownmix).
   */
  StereoDownmix?: Eac3AtmosStereoDownmix | string;

  /**
   * Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.
   */
  SurroundExMode?: Eac3AtmosSurroundExMode | string;
}

/**
 * @public
 * @enum
 */
export const Eac3AttenuationControl = {
  ATTENUATE_3_DB: "ATTENUATE_3_DB",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Eac3AttenuationControl = (typeof Eac3AttenuationControl)[keyof typeof Eac3AttenuationControl];

/**
 * @public
 * @enum
 */
export const Eac3BitstreamMode = {
  COMMENTARY: "COMMENTARY",
  COMPLETE_MAIN: "COMPLETE_MAIN",
  EMERGENCY: "EMERGENCY",
  HEARING_IMPAIRED: "HEARING_IMPAIRED",
  VISUALLY_IMPAIRED: "VISUALLY_IMPAIRED",
} as const;

/**
 * @public
 */
export type Eac3BitstreamMode = (typeof Eac3BitstreamMode)[keyof typeof Eac3BitstreamMode];

/**
 * @public
 * @enum
 */
export const Eac3CodingMode = {
  CODING_MODE_1_0: "CODING_MODE_1_0",
  CODING_MODE_2_0: "CODING_MODE_2_0",
  CODING_MODE_3_2: "CODING_MODE_3_2",
} as const;

/**
 * @public
 */
export type Eac3CodingMode = (typeof Eac3CodingMode)[keyof typeof Eac3CodingMode];

/**
 * @public
 * @enum
 */
export const Eac3DcFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Eac3DcFilter = (typeof Eac3DcFilter)[keyof typeof Eac3DcFilter];

/**
 * @public
 * @enum
 */
export const Eac3DynamicRangeCompressionLine = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;

/**
 * @public
 */
export type Eac3DynamicRangeCompressionLine =
  (typeof Eac3DynamicRangeCompressionLine)[keyof typeof Eac3DynamicRangeCompressionLine];

/**
 * @public
 * @enum
 */
export const Eac3DynamicRangeCompressionRf = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;

/**
 * @public
 */
export type Eac3DynamicRangeCompressionRf =
  (typeof Eac3DynamicRangeCompressionRf)[keyof typeof Eac3DynamicRangeCompressionRf];

/**
 * @public
 * @enum
 */
export const Eac3LfeControl = {
  LFE: "LFE",
  NO_LFE: "NO_LFE",
} as const;

/**
 * @public
 */
export type Eac3LfeControl = (typeof Eac3LfeControl)[keyof typeof Eac3LfeControl];

/**
 * @public
 * @enum
 */
export const Eac3LfeFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Eac3LfeFilter = (typeof Eac3LfeFilter)[keyof typeof Eac3LfeFilter];

/**
 * @public
 * @enum
 */
export const Eac3MetadataControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;

/**
 * @public
 */
export type Eac3MetadataControl = (typeof Eac3MetadataControl)[keyof typeof Eac3MetadataControl];

/**
 * @public
 * @enum
 */
export const Eac3PassthroughControl = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  WHEN_POSSIBLE: "WHEN_POSSIBLE",
} as const;

/**
 * @public
 */
export type Eac3PassthroughControl = (typeof Eac3PassthroughControl)[keyof typeof Eac3PassthroughControl];

/**
 * @public
 * @enum
 */
export const Eac3PhaseControl = {
  NO_SHIFT: "NO_SHIFT",
  SHIFT_90_DEGREES: "SHIFT_90_DEGREES",
} as const;

/**
 * @public
 */
export type Eac3PhaseControl = (typeof Eac3PhaseControl)[keyof typeof Eac3PhaseControl];

/**
 * @public
 * @enum
 */
export const Eac3StereoDownmix = {
  DPL2: "DPL2",
  LO_RO: "LO_RO",
  LT_RT: "LT_RT",
  NOT_INDICATED: "NOT_INDICATED",
} as const;

/**
 * @public
 */
export type Eac3StereoDownmix = (typeof Eac3StereoDownmix)[keyof typeof Eac3StereoDownmix];

/**
 * @public
 * @enum
 */
export const Eac3SurroundExMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  NOT_INDICATED: "NOT_INDICATED",
} as const;

/**
 * @public
 */
export type Eac3SurroundExMode = (typeof Eac3SurroundExMode)[keyof typeof Eac3SurroundExMode];

/**
 * @public
 * @enum
 */
export const Eac3SurroundMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  NOT_INDICATED: "NOT_INDICATED",
} as const;

/**
 * @public
 */
export type Eac3SurroundMode = (typeof Eac3SurroundMode)[keyof typeof Eac3SurroundMode];

/**
 * @public
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
 */
export interface Eac3Settings {
  /**
   * If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   */
  AttenuationControl?: Eac3AttenuationControl | string;

  /**
   * Specify the average bitrate in bits per second. The bitrate that you specify must be a multiple of 8000 within the allowed minimum and maximum values. Leave blank to use the default bitrate for the coding mode you select according ETSI TS 102 366. Valid bitrates for coding mode 1/0: Default: 96000. Minimum: 32000. Maximum: 3024000. Valid bitrates for coding mode 2/0: Default: 192000. Minimum: 96000. Maximum: 3024000. Valid bitrates for coding mode 3/2: Default: 384000. Minimum: 192000. Maximum: 3024000.
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: Eac3BitstreamMode | string;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   */
  CodingMode?: Eac3CodingMode | string;

  /**
   * Activates a DC highpass filter for all input channels.
   */
  DcFilter?: Eac3DcFilter | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   */
  DynamicRangeCompressionLine?: Eac3DynamicRangeCompressionLine | string;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   */
  DynamicRangeCompressionRf?: Eac3DynamicRangeCompressionRf | string;

  /**
   * When encoding 3/2 audio, controls whether the LFE channel is enabled
   */
  LfeControl?: Eac3LfeControl | string;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   */
  LfeFilter?: Eac3LfeFilter | string;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only center mix (Lo/Ro center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only center (loRoCenterMixLevel).
   */
  LoRoCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only surround (loRoSurroundMixLevel).
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total center (ltRtCenterMixLevel).
   */
  LtRtCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total surround (ltRtSurroundMixLevel).
   */
  LtRtSurroundMixLevel?: number;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Eac3MetadataControl | string;

  /**
   * When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   */
  PassthroughControl?: Eac3PassthroughControl | string;

  /**
   * Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.
   */
  PhaseControl?: Eac3PhaseControl | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;

  /**
   * Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix).
   */
  StereoDownmix?: Eac3StereoDownmix | string;

  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   */
  SurroundExMode?: Eac3SurroundExMode | string;

  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
   */
  SurroundMode?: Eac3SurroundMode | string;
}

/**
 * @public
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
 */
export interface Mp2Settings {
  /**
   * Specify the average bitrate in bits per second.
   */
  Bitrate?: number;

  /**
   * Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.
   */
  Channels?: number;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;
}

/**
 * @public
 * @enum
 */
export const Mp3RateControlMode = {
  CBR: "CBR",
  VBR: "VBR",
} as const;

/**
 * @public
 */
export type Mp3RateControlMode = (typeof Mp3RateControlMode)[keyof typeof Mp3RateControlMode];

/**
 * @public
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
 */
export interface Mp3Settings {
  /**
   * Specify the average bitrate in bits per second.
   */
  Bitrate?: number;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.
   */
  Channels?: number;

  /**
   * Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR).
   */
  RateControlMode?: Mp3RateControlMode | string;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;

  /**
   * Required when you set Bitrate control mode (rateControlMode) to VBR. Specify the audio quality of this MP3 output from 0 (highest quality) to 9 (lowest quality).
   */
  VbrQuality?: number;
}

/**
 * @public
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.
 */
export interface OpusSettings {
  /**
   * Optional. Specify the average bitrate in bits per second. Valid values are multiples of 8000, from 32000 through 192000. The default value is 96000, which we recommend for quality and bandwidth.
   */
  Bitrate?: number;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.
   */
  Channels?: number;

  /**
   * Optional. Sample rate in hz. Valid values are 16000, 24000, and 48000. The default value is 48000.
   */
  SampleRate?: number;
}

/**
 * @public
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.
 */
export interface VorbisSettings {
  /**
   * Optional. Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2. The default value is 2.
   */
  Channels?: number;

  /**
   * Optional. Specify the audio sample rate in Hz. Valid values are 22050, 32000, 44100, and 48000. The default value is 48000.
   */
  SampleRate?: number;

  /**
   * Optional. Specify the variable audio quality of this Vorbis output from -1 (lowest quality, ~45 kbit/s) to 10 (highest quality, ~500 kbit/s). The default value is 4 (~128 kbit/s). Values 5 and 6 are approximately 160 and 192 kbit/s, respectively.
   */
  VbrQuality?: number;
}

/**
 * @public
 * @enum
 */
export const WavFormat = {
  RF64: "RF64",
  RIFF: "RIFF",
} as const;

/**
 * @public
 */
export type WavFormat = (typeof WavFormat)[keyof typeof WavFormat];

/**
 * @public
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
 */
export interface WavSettings {
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   */
  BitDepth?: number;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   */
  Channels?: number;

  /**
   * The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.
   */
  Format?: WavFormat | string;

  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;
}

/**
 * @public
 * Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec.
 */
export interface AudioCodecSettings {
  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
   */
  AacSettings?: AacSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
   */
  Ac3Settings?: Ac3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
   */
  AiffSettings?: AiffSettings;

  /**
   * Choose the audio codec for this output. Note that the option Dolby Digital passthrough (PASSTHROUGH) applies only to Dolby Digital and Dolby Digital Plus audio inputs. Make sure that you choose a codec that's supported with your output container: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#reference-codecs-containers-output-audio For audio-only outputs, make sure that both your input audio codec and your output audio codec are supported for audio-only workflows. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers-input.html#reference-codecs-containers-input-audio-only and https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#audio-only-output
   */
  Codec?: AudioCodec | string;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
   */
  Eac3AtmosSettings?: Eac3AtmosSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
   */
  Eac3Settings?: Eac3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
   */
  Mp2Settings?: Mp2Settings;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
   */
  Mp3Settings?: Mp3Settings;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.
   */
  OpusSettings?: OpusSettings;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.
   */
  VorbisSettings?: VorbisSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
   */
  WavSettings?: WavSettings;
}

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  AAR: "AAR",
  ABK: "ABK",
  AFR: "AFR",
  AKA: "AKA",
  AMH: "AMH",
  ARA: "ARA",
  ARG: "ARG",
  ASM: "ASM",
  AVA: "AVA",
  AVE: "AVE",
  AYM: "AYM",
  AZE: "AZE",
  BAK: "BAK",
  BAM: "BAM",
  BEL: "BEL",
  BEN: "BEN",
  BIH: "BIH",
  BIS: "BIS",
  BOD: "BOD",
  BOS: "BOS",
  BRE: "BRE",
  BUL: "BUL",
  CAT: "CAT",
  CES: "CES",
  CHA: "CHA",
  CHE: "CHE",
  CHU: "CHU",
  CHV: "CHV",
  COR: "COR",
  COS: "COS",
  CRE: "CRE",
  CYM: "CYM",
  DAN: "DAN",
  DEU: "DEU",
  DIV: "DIV",
  DZO: "DZO",
  ELL: "ELL",
  ENG: "ENG",
  ENM: "ENM",
  EPO: "EPO",
  EST: "EST",
  EUS: "EUS",
  EWE: "EWE",
  FAO: "FAO",
  FAS: "FAS",
  FIJ: "FIJ",
  FIN: "FIN",
  FRA: "FRA",
  FRM: "FRM",
  FRY: "FRY",
  FUL: "FUL",
  GER: "GER",
  GLA: "GLA",
  GLE: "GLE",
  GLG: "GLG",
  GLV: "GLV",
  GRN: "GRN",
  GUJ: "GUJ",
  HAT: "HAT",
  HAU: "HAU",
  HEB: "HEB",
  HER: "HER",
  HIN: "HIN",
  HMO: "HMO",
  HRV: "HRV",
  HUN: "HUN",
  HYE: "HYE",
  IBO: "IBO",
  IDO: "IDO",
  III: "III",
  IKU: "IKU",
  ILE: "ILE",
  INA: "INA",
  IND: "IND",
  IPK: "IPK",
  ISL: "ISL",
  ITA: "ITA",
  JAV: "JAV",
  JPN: "JPN",
  KAL: "KAL",
  KAN: "KAN",
  KAS: "KAS",
  KAT: "KAT",
  KAU: "KAU",
  KAZ: "KAZ",
  KHM: "KHM",
  KIK: "KIK",
  KIN: "KIN",
  KIR: "KIR",
  KOM: "KOM",
  KON: "KON",
  KOR: "KOR",
  KUA: "KUA",
  KUR: "KUR",
  LAO: "LAO",
  LAT: "LAT",
  LAV: "LAV",
  LIM: "LIM",
  LIN: "LIN",
  LIT: "LIT",
  LTZ: "LTZ",
  LUB: "LUB",
  LUG: "LUG",
  MAH: "MAH",
  MAL: "MAL",
  MAR: "MAR",
  MKD: "MKD",
  MLG: "MLG",
  MLT: "MLT",
  MON: "MON",
  MRI: "MRI",
  MSA: "MSA",
  MYA: "MYA",
  NAU: "NAU",
  NAV: "NAV",
  NBL: "NBL",
  NDE: "NDE",
  NDO: "NDO",
  NEP: "NEP",
  NLD: "NLD",
  NNO: "NNO",
  NOB: "NOB",
  NOR: "NOR",
  NYA: "NYA",
  OCI: "OCI",
  OJI: "OJI",
  ORI: "ORI",
  ORJ: "ORJ",
  ORM: "ORM",
  OSS: "OSS",
  PAN: "PAN",
  PLI: "PLI",
  POL: "POL",
  POR: "POR",
  PUS: "PUS",
  QAA: "QAA",
  QPC: "QPC",
  QUE: "QUE",
  ROH: "ROH",
  RON: "RON",
  RUN: "RUN",
  RUS: "RUS",
  SAG: "SAG",
  SAN: "SAN",
  SIN: "SIN",
  SLK: "SLK",
  SLV: "SLV",
  SME: "SME",
  SMO: "SMO",
  SNA: "SNA",
  SND: "SND",
  SOM: "SOM",
  SOT: "SOT",
  SPA: "SPA",
  SQI: "SQI",
  SRB: "SRB",
  SRD: "SRD",
  SRP: "SRP",
  SSW: "SSW",
  SUN: "SUN",
  SWA: "SWA",
  SWE: "SWE",
  TAH: "TAH",
  TAM: "TAM",
  TAT: "TAT",
  TEL: "TEL",
  TGK: "TGK",
  TGL: "TGL",
  THA: "THA",
  TIR: "TIR",
  TNG: "TNG",
  TON: "TON",
  TSN: "TSN",
  TSO: "TSO",
  TUK: "TUK",
  TUR: "TUR",
  TWI: "TWI",
  UIG: "UIG",
  UKR: "UKR",
  URD: "URD",
  UZB: "UZB",
  VEN: "VEN",
  VIE: "VIE",
  VOL: "VOL",
  WLN: "WLN",
  WOL: "WOL",
  XHO: "XHO",
  YID: "YID",
  YOR: "YOR",
  ZHA: "ZHA",
  ZHO: "ZHO",
  ZUL: "ZUL",
} as const;

/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const AudioLanguageCodeControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;

/**
 * @public
 */
export type AudioLanguageCodeControl = (typeof AudioLanguageCodeControl)[keyof typeof AudioLanguageCodeControl];

/**
 * @public
 * OutputChannel mapping settings.
 */
export interface OutputChannelMapping {
  /**
   * Use this setting to specify your remix values when they are integers, such as -10, 0, or 4.
   */
  InputChannels?: number[];

  /**
   * Use this setting to specify your remix values when they have a decimal component, such as -10.312, 0.08, or 4.9. MediaConvert rounds your remixing values to the nearest thousandth.
   */
  InputChannelsFineTune?: number[];
}

/**
 * @public
 * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both.
 */
export interface ChannelMapping {
  /**
   * In your JSON job specification, include one child of OutputChannels for each audio channel that you want in your output. Each child should contain one instance of InputChannels or InputChannelsFineTune.
   */
  OutputChannels?: OutputChannelMapping[];
}

/**
 * @public
 * Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides.
 */
export interface RemixSettings {
  /**
   * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both.
   */
  ChannelMapping?: ChannelMapping;

  /**
   * Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different. If you are doing both input channel mapping and output channel mapping, the number of output channels in your input mapping must be the same as the number of input channels in your output mapping.
   */
  ChannelsIn?: number;

  /**
   * Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8... 64. (1 and even numbers to 64.) If you are doing both input channel mapping and output channel mapping, the number of output channels in your input mapping must be the same as the number of input channels in your output mapping.
   */
  ChannelsOut?: number;
}

/**
 * @public
 * Settings related to one audio tab on the MediaConvert console. In your job JSON, an instance of AudioDescription is equivalent to one audio tab in the console. Usually, one audio tab corresponds to one output audio track. Depending on how you set up your input audio selectors and whether you use audio selector groups, one audio tab can correspond to a group of output audio tracks.
 */
export interface AudioDescription {
  /**
   * When you mimic a multi-channel audio layout with multiple mono-channel tracks, you can tag each channel layout manually. For example, you would tag the tracks that contain your left, right, and center audio with Left (L), Right (R), and Center (C), respectively. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use audio layout tagging, your output must be in a QuickTime (.mov) container; your audio codec must be AAC, WAV, or AIFF; and you must set up your audio track to have only one channel.
   */
  AudioChannelTaggingSettings?: AudioChannelTaggingSettings;

  /**
   * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
   */
  AudioNormalizationSettings?: AudioNormalizationSettings;

  /**
   * Specifies which audio data to use from each input. In the simplest case, specify an "Audio Selector":#inputs-audio_selector by name based on its order within each input. For example if you specify "Audio Selector 3", then the third audio selector will be used from each input. If an input does not have an "Audio Selector 3", then the audio selector marked as "default" in that input will be used. If there is no audio selector marked as "default", silence will be inserted for the duration of that input. Alternatively, an "Audio Selector Group":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then "Audio Selector 1" will be chosen automatically.
   */
  AudioSourceName?: string;

  /**
   * Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved.
   */
  AudioType?: number;

  /**
   * When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.
   */
  AudioTypeControl?: AudioTypeControl | string;

  /**
   * Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec.
   */
  CodecSettings?: AudioCodecSettings;

  /**
   * Specify the language for this audio output track. The service puts this language code into your output audio track when you set Language code control (AudioLanguageCodeControl) to Use configured (USE_CONFIGURED). The service also uses your specified custom language code when you set Language code control (AudioLanguageCodeControl) to Follow input (FOLLOW_INPUT), but your input file doesn't specify a language code. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   */
  CustomLanguageCode?: string;

  /**
   * Indicates the language of the audio output track. The ISO 639 language specified in the 'Language Code' drop down will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specify which source for language code takes precedence for this audio track. When you choose Follow input (FOLLOW_INPUT), the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code (languageCode or customLanguageCode). When you choose Use configured (USE_CONFIGURED), the service uses the language code that you specify.
   */
  LanguageCodeControl?: AudioLanguageCodeControl | string;

  /**
   * Advanced audio remixing settings.
   */
  RemixSettings?: RemixSettings;

  /**
   * Specify a label for this output audio stream. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   */
  StreamName?: string;
}

/**
 * @public
 * Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting.
 */
export interface ForceIncludeRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   */
  Height?: number;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   */
  Width?: number;
}

/**
 * @public
 * Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size.
 */
export interface MinBottomRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   */
  Height?: number;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   */
  Width?: number;
}

/**
 * @public
 * Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution.
 */
export interface MinTopRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   */
  Height?: number;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   */
  Width?: number;
}

/**
 * @public
 * @enum
 */
export const RuleType = {
  ALLOWED_RENDITIONS: "ALLOWED_RENDITIONS",
  FORCE_INCLUDE_RENDITIONS: "FORCE_INCLUDE_RENDITIONS",
  MIN_BOTTOM_RENDITION_SIZE: "MIN_BOTTOM_RENDITION_SIZE",
  MIN_TOP_RENDITION_SIZE: "MIN_TOP_RENDITION_SIZE",
} as const;

/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * Specify one or more Automated ABR rule types. Note: Force include and Allowed renditions are mutually exclusive.
 */
export interface AutomatedAbrRule {
  /**
   * When customer adds the allowed renditions rule for auto ABR ladder, they are required to add at leat one rendition to allowedRenditions list
   */
  AllowedRenditions?: AllowedRenditionSize[];

  /**
   * When customer adds the force include renditions rule for auto ABR ladder, they are required to add at leat one rendition to forceIncludeRenditions list
   */
  ForceIncludeRenditions?: ForceIncludeRenditionSize[];

  /**
   * Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size.
   */
  MinBottomRenditionSize?: MinBottomRenditionSize;

  /**
   * Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution.
   */
  MinTopRenditionSize?: MinTopRenditionSize;

  /**
   * Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution. Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size. Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting. Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * (Required) The number of resolutions that you specify must be equal to, or greater than, the Max renditions setting. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions.
   */
  Type?: RuleType | string;
}

/**
 * @public
 * @enum
 */
export const BurninSubtitleAlignment = {
  AUTO: "AUTO",
  CENTERED: "CENTERED",
  LEFT: "LEFT",
} as const;

/**
 * @public
 */
export type BurninSubtitleAlignment = (typeof BurninSubtitleAlignment)[keyof typeof BurninSubtitleAlignment];

/**
 * @public
 * @enum
 */
export const BurninSubtitleApplyFontColor = {
  ALL_TEXT: "ALL_TEXT",
  WHITE_TEXT_ONLY: "WHITE_TEXT_ONLY",
} as const;

/**
 * @public
 */
export type BurninSubtitleApplyFontColor =
  (typeof BurninSubtitleApplyFontColor)[keyof typeof BurninSubtitleApplyFontColor];

/**
 * @public
 * @enum
 */
export const BurninSubtitleBackgroundColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;

/**
 * @public
 */
export type BurninSubtitleBackgroundColor =
  (typeof BurninSubtitleBackgroundColor)[keyof typeof BurninSubtitleBackgroundColor];

/**
 * @public
 * @enum
 */
export const BurninSubtitleFallbackFont = {
  BEST_MATCH: "BEST_MATCH",
  MONOSPACED_SANSSERIF: "MONOSPACED_SANSSERIF",
  MONOSPACED_SERIF: "MONOSPACED_SERIF",
  PROPORTIONAL_SANSSERIF: "PROPORTIONAL_SANSSERIF",
  PROPORTIONAL_SERIF: "PROPORTIONAL_SERIF",
} as const;

/**
 * @public
 */
export type BurninSubtitleFallbackFont = (typeof BurninSubtitleFallbackFont)[keyof typeof BurninSubtitleFallbackFont];

/**
 * @public
 * @enum
 */
export const BurninSubtitleFontColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  HEX: "HEX",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;

/**
 * @public
 */
export type BurninSubtitleFontColor = (typeof BurninSubtitleFontColor)[keyof typeof BurninSubtitleFontColor];

/**
 * @public
 * @enum
 */
export const FontScript = {
  AUTOMATIC: "AUTOMATIC",
  HANS: "HANS",
  HANT: "HANT",
} as const;

/**
 * @public
 */
export type FontScript = (typeof FontScript)[keyof typeof FontScript];

/**
 * @public
 * @enum
 */
export const BurninSubtitleOutlineColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;

/**
 * @public
 */
export type BurninSubtitleOutlineColor = (typeof BurninSubtitleOutlineColor)[keyof typeof BurninSubtitleOutlineColor];

/**
 * @public
 * @enum
 */
export const BurninSubtitleShadowColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;

/**
 * @public
 */
export type BurninSubtitleShadowColor = (typeof BurninSubtitleShadowColor)[keyof typeof BurninSubtitleShadowColor];

/**
 * @public
 * @enum
 */
export const BurnInSubtitleStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type BurnInSubtitleStylePassthrough =
  (typeof BurnInSubtitleStylePassthrough)[keyof typeof BurnInSubtitleStylePassthrough];

/**
 * @public
 * @enum
 */
export const BurninSubtitleTeletextSpacing = {
  AUTO: "AUTO",
  FIXED_GRID: "FIXED_GRID",
  PROPORTIONAL: "PROPORTIONAL",
} as const;

/**
 * @public
 */
export type BurninSubtitleTeletextSpacing =
  (typeof BurninSubtitleTeletextSpacing)[keyof typeof BurninSubtitleTeletextSpacing];

/**
 * @public
 * Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to BURN_IN.
 */
export interface BurninDestinationSettings {
  /**
   * Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates.
   */
  Alignment?: BurninSubtitleAlignment | string;

  /**
   * Ignore this setting unless Style passthrough (StylePassthrough) is set to Enabled and Font color (FontColor) set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color (ApplyFontColor) for additional font color controls. When you choose White text only (WHITE_TEXT_ONLY), or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.
   */
  ApplyFontColor?: BurninSubtitleApplyFontColor | string;

  /**
   * Specify the color of the rectangle behind the captions. Leave background color (BackgroundColor) blank and set Style passthrough (StylePassthrough) to enabled to use the background color data from your input captions, if present.
   */
  BackgroundColor?: BurninSubtitleBackgroundColor | string;

  /**
   * Specify the opacity of the background rectangle. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough (StylePassthrough) is set to enabled, leave blank to pass through the background style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all backgrounds from your output captions.
   */
  BackgroundOpacity?: number;

  /**
   * Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font (FallbackFont) to best match (BEST_MATCH), or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.
   */
  FallbackFont?: BurninSubtitleFallbackFont | string;

  /**
   * Specify the color of the burned-in captions text. Leave Font color (FontColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font color data from your input captions, if present.
   */
  FontColor?: BurninSubtitleFontColor | string;

  /**
   * Specify the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   */
  FontOpacity?: number;

  /**
   * Specify the Font resolution (FontResolution) in DPI (dots per inch).
   */
  FontResolution?: number;

  /**
   * Set Font script (FontScript) to Automatically determined (AUTOMATIC), or leave blank, to automatically determine the font script in your input captions. Otherwise, set to Simplified Chinese (HANS) or Traditional Chinese (HANT) if your input font script uses Simplified or Traditional Chinese.
   */
  FontScript?: FontScript | string;

  /**
   * Specify the Font size (FontSize) in pixels. Must be a positive integer. Set to 0, or leave blank, for automatic font size.
   */
  FontSize?: number;

  /**
   * Ignore this setting unless your Font color is set to Hex. Enter either six or eight hexidecimal digits, representing red, green, and blue, with two optional extra digits for alpha. For example a value of 1122AABB is a red value of 0x11, a green value of 0x22, a blue value of 0xAA, and an alpha value of 0xBB.
   */
  HexFontColor?: string;

  /**
   * Specify font outline color. Leave Outline color (OutlineColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font outline color data from your input captions, if present.
   */
  OutlineColor?: BurninSubtitleOutlineColor | string;

  /**
   * Specify the Outline size (OutlineSize) of the caption text, in pixels. Leave Outline size blank and set Style passthrough (StylePassthrough) to enabled to use the outline size data from your input captions, if present.
   */
  OutlineSize?: number;

  /**
   * Specify the color of the shadow cast by the captions. Leave Shadow color (ShadowColor) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow color data from your input captions, if present.
   */
  ShadowColor?: BurninSubtitleShadowColor | string;

  /**
   * Specify the opacity of the shadow. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough (StylePassthrough) is set to Enabled, leave Shadow opacity (ShadowOpacity) blank to pass through the shadow style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all shadows from your output captions.
   */
  ShadowOpacity?: number;

  /**
   * Specify the horizontal offset of the shadow, relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.
   */
  ShadowXOffset?: number;

  /**
   * Specify the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. Leave Shadow y-offset (ShadowYOffset) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow y-offset data from your input captions, if present.
   */
  ShadowYOffset?: number;

  /**
   * Set Style passthrough (StylePassthrough) to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use default settings: white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings.
   */
  StylePassthrough?: BurnInSubtitleStylePassthrough | string;

  /**
   * Specify whether the text spacing (TeletextSpacing) in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid (FIXED_GRID) to conform to the spacing specified in the captions file more accurately. Choose proportional (PROPORTIONAL) to make the text easier to read for closed captions.
   */
  TeletextSpacing?: BurninSubtitleTeletextSpacing | string;

  /**
   * Specify the horizontal position (XPosition) of the captions, relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter.
   */
  XPosition?: number;

  /**
   * Specify the vertical position (YPosition) of the captions, relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output.
   */
  YPosition?: number;
}

/**
 * @public
 * @enum
 */
export const CaptionDestinationType = {
  BURN_IN: "BURN_IN",
  DVB_SUB: "DVB_SUB",
  EMBEDDED: "EMBEDDED",
  EMBEDDED_PLUS_SCTE20: "EMBEDDED_PLUS_SCTE20",
  IMSC: "IMSC",
  SCC: "SCC",
  SCTE20_PLUS_EMBEDDED: "SCTE20_PLUS_EMBEDDED",
  SMI: "SMI",
  SRT: "SRT",
  TELETEXT: "TELETEXT",
  TTML: "TTML",
  WEBVTT: "WEBVTT",
} as const;

/**
 * @public
 */
export type CaptionDestinationType = (typeof CaptionDestinationType)[keyof typeof CaptionDestinationType];

/**
 * @public
 * @enum
 */
export const DvbSubtitleAlignment = {
  AUTO: "AUTO",
  CENTERED: "CENTERED",
  LEFT: "LEFT",
} as const;

/**
 * @public
 */
export type DvbSubtitleAlignment = (typeof DvbSubtitleAlignment)[keyof typeof DvbSubtitleAlignment];

/**
 * @public
 * @enum
 */
export const DvbSubtitleApplyFontColor = {
  ALL_TEXT: "ALL_TEXT",
  WHITE_TEXT_ONLY: "WHITE_TEXT_ONLY",
} as const;

/**
 * @public
 */
export type DvbSubtitleApplyFontColor = (typeof DvbSubtitleApplyFontColor)[keyof typeof DvbSubtitleApplyFontColor];

/**
 * @public
 * @enum
 */
export const DvbSubtitleBackgroundColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;

/**
 * @public
 */
export type DvbSubtitleBackgroundColor = (typeof DvbSubtitleBackgroundColor)[keyof typeof DvbSubtitleBackgroundColor];

/**
 * @public
 * @enum
 */
export const DvbddsHandling = {
  NONE: "NONE",
  NO_DISPLAY_WINDOW: "NO_DISPLAY_WINDOW",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type DvbddsHandling = (typeof DvbddsHandling)[keyof typeof DvbddsHandling];

/**
 * @public
 * @enum
 */
export const DvbSubSubtitleFallbackFont = {
  BEST_MATCH: "BEST_MATCH",
  MONOSPACED_SANSSERIF: "MONOSPACED_SANSSERIF",
  MONOSPACED_SERIF: "MONOSPACED_SERIF",
  PROPORTIONAL_SANSSERIF: "PROPORTIONAL_SANSSERIF",
  PROPORTIONAL_SERIF: "PROPORTIONAL_SERIF",
} as const;

/**
 * @public
 */
export type DvbSubSubtitleFallbackFont = (typeof DvbSubSubtitleFallbackFont)[keyof typeof DvbSubSubtitleFallbackFont];

/**
 * @public
 * @enum
 */
export const DvbSubtitleFontColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  HEX: "HEX",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;

/**
 * @public
 */
export type DvbSubtitleFontColor = (typeof DvbSubtitleFontColor)[keyof typeof DvbSubtitleFontColor];

/**
 * @public
 * @enum
 */
export const DvbSubtitleOutlineColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;

/**
 * @public
 */
export type DvbSubtitleOutlineColor = (typeof DvbSubtitleOutlineColor)[keyof typeof DvbSubtitleOutlineColor];

/**
 * @public
 * @enum
 */
export const DvbSubtitleShadowColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;

/**
 * @public
 */
export type DvbSubtitleShadowColor = (typeof DvbSubtitleShadowColor)[keyof typeof DvbSubtitleShadowColor];

/**
 * @public
 * @enum
 */
export const DvbSubtitleStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DvbSubtitleStylePassthrough =
  (typeof DvbSubtitleStylePassthrough)[keyof typeof DvbSubtitleStylePassthrough];

/**
 * @public
 * @enum
 */
export const DvbSubtitlingType = {
  HEARING_IMPAIRED: "HEARING_IMPAIRED",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type DvbSubtitlingType = (typeof DvbSubtitlingType)[keyof typeof DvbSubtitlingType];

/**
 * @public
 * @enum
 */
export const DvbSubtitleTeletextSpacing = {
  AUTO: "AUTO",
  FIXED_GRID: "FIXED_GRID",
  PROPORTIONAL: "PROPORTIONAL",
} as const;

/**
 * @public
 */
export type DvbSubtitleTeletextSpacing = (typeof DvbSubtitleTeletextSpacing)[keyof typeof DvbSubtitleTeletextSpacing];

/**
 * @public
 * Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to DVB_SUB.
 */
export interface DvbSubDestinationSettings {
  /**
   * Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  Alignment?: DvbSubtitleAlignment | string;

  /**
   * Ignore this setting unless Style Passthrough (StylePassthrough) is set to Enabled and Font color (FontColor) set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color (ApplyFontColor) for additional font color controls. When you choose White text only (WHITE_TEXT_ONLY), or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.
   */
  ApplyFontColor?: DvbSubtitleApplyFontColor | string;

  /**
   * Specify the color of the rectangle behind the captions. Leave background color (BackgroundColor) blank and set Style passthrough (StylePassthrough) to enabled to use the background color data from your input captions, if present.
   */
  BackgroundColor?: DvbSubtitleBackgroundColor | string;

  /**
   * Specify the opacity of the background rectangle. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough (StylePassthrough) is set to enabled, leave blank to pass through the background style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all backgrounds from your output captions. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  BackgroundOpacity?: number;

  /**
   * Specify how MediaConvert handles the display definition segment (DDS). To exclude the DDS from this set of captions: Keep the default, None. To include the DDS: Choose Specified. When you do, also specify the offset coordinates of the display window with DDS x-coordinate and DDS y-coordinate. To include the DDS, but not include display window data: Choose No display window. When you do, you can write position metadata to the page composition segment (PCS) with DDS x-coordinate and DDS y-coordinate. For video resolutions with a height of 576 pixels or less, MediaConvert doesn't include the DDS, regardless of the value you choose for DDS handling. All burn-in and DVB-Sub font settings must match.
   */
  DdsHandling?: DvbddsHandling | string;

  /**
   * Use this setting, along with DDS y-coordinate (ddsYCoordinate), to specify the upper left corner of the display definition segment (DDS) display window. With this setting, specify the distance, in pixels, between the left side of the frame and the left side of the DDS display window. Keep the default value, 0, to have MediaConvert automatically choose this offset. Related setting: When you use this setting, you must set DDS handling (ddsHandling) to a value other than None (NONE). MediaConvert uses these values to determine whether to write page position data to the DDS or to the page composition segment (PCS). All burn-in and DVB-Sub font settings must match.
   */
  DdsXCoordinate?: number;

  /**
   * Use this setting, along with DDS x-coordinate (ddsXCoordinate), to specify the upper left corner of the display definition segment (DDS) display window. With this setting, specify the distance, in pixels, between the top of the frame and the top of the DDS display window. Keep the default value, 0, to have MediaConvert automatically choose this offset. Related setting: When you use this setting, you must set DDS handling (ddsHandling) to a value other than None (NONE). MediaConvert uses these values to determine whether to write page position data to the DDS or to the page composition segment (PCS). All burn-in and DVB-Sub font settings must match.
   */
  DdsYCoordinate?: number;

  /**
   * Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font (FallbackFont) to best match (BEST_MATCH), or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.
   */
  FallbackFont?: DvbSubSubtitleFallbackFont | string;

  /**
   * Specify the color of the captions text. Leave Font color (FontColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  FontColor?: DvbSubtitleFontColor | string;

  /**
   * Specify the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * Within your job settings, all of your DVB-Sub settings must be identical.
   */
  FontOpacity?: number;

  /**
   * Specify the Font resolution (FontResolution) in DPI (dots per inch).
   * Within your job settings, all of your DVB-Sub settings must be identical.
   */
  FontResolution?: number;

  /**
   * Set Font script (FontScript) to Automatically determined (AUTOMATIC), or leave blank, to automatically determine the font script in your input captions. Otherwise, set to Simplified Chinese (HANS) or Traditional Chinese (HANT) if your input font script uses Simplified or Traditional Chinese. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  FontScript?: FontScript | string;

  /**
   * Specify the Font size (FontSize) in pixels. Must be a positive integer. Set to 0, or leave blank, for automatic font size. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  FontSize?: number;

  /**
   * Specify the height, in pixels, of this set of DVB-Sub captions. The default value is 576 pixels. Related setting: When you use this setting, you must set DDS handling (ddsHandling) to a value other than None (NONE). All burn-in and DVB-Sub font settings must match.
   */
  Height?: number;

  /**
   * Ignore this setting unless your Font color is set to Hex. Enter either six or eight hexidecimal digits, representing red, green, and blue, with two optional extra digits for alpha. For example a value of 1122AABB is a red value of 0x11, a green value of 0x22, a blue value of 0xAA, and an alpha value of 0xBB.
   */
  HexFontColor?: string;

  /**
   * Specify font outline color. Leave Outline color (OutlineColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font outline color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  OutlineColor?: DvbSubtitleOutlineColor | string;

  /**
   * Specify the Outline size (OutlineSize) of the caption text, in pixels. Leave Outline size blank and set Style passthrough (StylePassthrough) to enabled to use the outline size data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  OutlineSize?: number;

  /**
   * Specify the color of the shadow cast by the captions. Leave Shadow color (ShadowColor) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  ShadowColor?: DvbSubtitleShadowColor | string;

  /**
   * Specify the opacity of the shadow. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough (StylePassthrough) is set to Enabled, leave Shadow opacity (ShadowOpacity) blank to pass through the shadow style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all shadows from your output captions. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  ShadowOpacity?: number;

  /**
   * Specify the horizontal offset of the shadow, relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  ShadowXOffset?: number;

  /**
   * Specify the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. Leave Shadow y-offset (ShadowYOffset) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow y-offset data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  ShadowYOffset?: number;

  /**
   * Set Style passthrough (StylePassthrough) to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use default settings: white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings.
   */
  StylePassthrough?: DvbSubtitleStylePassthrough | string;

  /**
   * Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue.
   */
  SubtitlingType?: DvbSubtitlingType | string;

  /**
   * Specify whether the Text spacing (TeletextSpacing) in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid (FIXED_GRID) to conform to the spacing specified in the captions file more accurately. Choose proportional (PROPORTIONAL) to make the text easier to read for closed captions. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  TeletextSpacing?: DvbSubtitleTeletextSpacing | string;

  /**
   * Specify the width, in pixels, of this set of DVB-Sub captions. The default value is 720 pixels. Related setting: When you use this setting, you must set DDS handling (ddsHandling) to a value other than None (NONE). All burn-in and DVB-Sub font settings must match.
   */
  Width?: number;

  /**
   * Specify the horizontal position (XPosition) of the captions, relative to the left side of the outputin pixels. A value of 10 would result in the captions starting 10 pixels from the left ofthe output. If no explicit x_position is provided, the horizontal caption position will bedetermined by the alignment parameter. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  XPosition?: number;

  /**
   * Specify the vertical position (YPosition) of the captions, relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. Within your job settings, all of your DVB-Sub settings must be identical.
   */
  YPosition?: number;
}

/**
 * @public
 * Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to EMBEDDED, EMBEDDED_PLUS_SCTE20, or SCTE20_PLUS_EMBEDDED.
 */
export interface EmbeddedDestinationSettings {
  /**
   * Ignore this setting unless your input captions are SCC format and your output captions are embedded in the video stream. Specify a CC number for each captions channel in this output. If you have two channels, choose CC numbers that aren't in the same field. For example, choose 1 and 3. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   */
  Destination608ChannelNumber?: number;

  /**
   * Ignore this setting unless your input captions are SCC format and you want both 608 and 708 captions embedded in your output stream. Optionally, specify the 708 service number for each output captions channel. Choose a different number for each channel. To use this setting, also set Force 608 to 708 upconvert (Convert608To708) to Upconvert (UPCONVERT) in your input captions selector settings. If you choose to upconvert but don't specify a 708 service number, MediaConvert uses the number that you specify for CC channel number (destination608ChannelNumber) for the 708 service number. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   */
  Destination708ServiceNumber?: number;
}

/**
 * @public
 * @enum
 */
export const ImscAccessibilitySubs = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ImscAccessibilitySubs = (typeof ImscAccessibilitySubs)[keyof typeof ImscAccessibilitySubs];

/**
 * @public
 * @enum
 */
export const ImscStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ImscStylePassthrough = (typeof ImscStylePassthrough)[keyof typeof ImscStylePassthrough];

/**
 * @public
 * Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to IMSC.
 */
export interface ImscDestinationSettings {
  /**
   * If the IMSC captions track is intended to provide accessibility for people who are deaf or hard of hearing: Set Accessibility subtitles to Enabled. When you do, MediaConvert adds accessibility attributes to your output HLS or DASH manifest. For HLS manifests, MediaConvert adds the following accessibility attributes under EXT-X-MEDIA for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". For DASH manifests, MediaConvert adds the following in the adaptation set for this track: <Accessibility schemeIdUri="urn:mpeg:dash:role:2011" value="caption"/>. If the captions track is not intended to provide such accessibility: Keep the default value, Disabled. When you do, for DASH manifests, MediaConvert instead adds the following in the adaptation set for this track: <Role schemeIDUri="urn:mpeg:dash:role:2011" value="subtitle"/>.
   */
  Accessibility?: ImscAccessibilitySubs | string;

  /**
   * Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions.
   */
  StylePassthrough?: ImscStylePassthrough | string;
}

/**
 * @public
 * @enum
 */
export const SccDestinationFramerate = {
  FRAMERATE_23_97: "FRAMERATE_23_97",
  FRAMERATE_24: "FRAMERATE_24",
  FRAMERATE_25: "FRAMERATE_25",
  FRAMERATE_29_97_DROPFRAME: "FRAMERATE_29_97_DROPFRAME",
  FRAMERATE_29_97_NON_DROPFRAME: "FRAMERATE_29_97_NON_DROPFRAME",
} as const;

/**
 * @public
 */
export type SccDestinationFramerate = (typeof SccDestinationFramerate)[keyof typeof SccDestinationFramerate];

/**
 * @public
 * Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to SCC.
 */
export interface SccDestinationSettings {
  /**
   * Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).
   */
  Framerate?: SccDestinationFramerate | string;
}

/**
 * @public
 * @enum
 */
export const SrtStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type SrtStylePassthrough = (typeof SrtStylePassthrough)[keyof typeof SrtStylePassthrough];

/**
 * @public
 * Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to SRT.
 */
export interface SrtDestinationSettings {
  /**
   * Set Style passthrough (StylePassthrough) to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use simplified output captions.
   */
  StylePassthrough?: SrtStylePassthrough | string;
}

/**
 * @public
 * @enum
 */
export const TeletextPageType = {
  PAGE_TYPE_ADDL_INFO: "PAGE_TYPE_ADDL_INFO",
  PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE: "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE",
  PAGE_TYPE_INITIAL: "PAGE_TYPE_INITIAL",
  PAGE_TYPE_PROGRAM_SCHEDULE: "PAGE_TYPE_PROGRAM_SCHEDULE",
  PAGE_TYPE_SUBTITLE: "PAGE_TYPE_SUBTITLE",
} as const;

/**
 * @public
 */
export type TeletextPageType = (typeof TeletextPageType)[keyof typeof TeletextPageType];

/**
 * @public
 * Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to TELETEXT.
 */
export interface TeletextDestinationSettings {
  /**
   * Set pageNumber to the Teletext page number for the destination captions for this output. This value must be a three-digit hexadecimal string; strings ending in -FF are invalid. If you are passing through the entire set of Teletext data, do not use this field.
   */
  PageNumber?: string;

  /**
   * Specify the page types for this Teletext page. If you don't specify a value here, the service sets the page type to the default value Subtitle (PAGE_TYPE_SUBTITLE). If you pass through the entire set of Teletext data, don't use this field. When you pass through a set of Teletext pages, your output has the same page types as your input.
   */
  PageTypes?: (TeletextPageType | string)[];
}

/**
 * @public
 * @enum
 */
export const TtmlStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type TtmlStylePassthrough = (typeof TtmlStylePassthrough)[keyof typeof TtmlStylePassthrough];

/**
 * @public
 * Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to TTML.
 */
export interface TtmlDestinationSettings {
  /**
   * Pass through style and position information from a TTML-like input source (TTML, IMSC, SMPTE-TT) to the TTML output.
   */
  StylePassthrough?: TtmlStylePassthrough | string;
}

/**
 * @public
 * @enum
 */
export const WebvttAccessibilitySubs = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type WebvttAccessibilitySubs = (typeof WebvttAccessibilitySubs)[keyof typeof WebvttAccessibilitySubs];

/**
 * @public
 * @enum
 */
export const WebvttStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  STRICT: "STRICT",
} as const;

/**
 * @public
 */
export type WebvttStylePassthrough = (typeof WebvttStylePassthrough)[keyof typeof WebvttStylePassthrough];

/**
 * @public
 * Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to WebVTT.
 */
export interface WebvttDestinationSettings {
  /**
   * If the WebVTT captions track is intended to provide accessibility for people who are deaf or hard of hearing: Set Accessibility subtitles to Enabled. When you do, MediaConvert adds accessibility attributes to your output HLS or DASH manifest. For HLS manifests, MediaConvert adds the following accessibility attributes under EXT-X-MEDIA for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". For DASH manifests, MediaConvert adds the following in the adaptation set for this track: <Accessibility schemeIdUri="urn:mpeg:dash:role:2011" value="caption"/>. If the captions track is not intended to provide such accessibility: Keep the default value, Disabled. When you do, for DASH manifests, MediaConvert instead adds the following in the adaptation set for this track: <Role schemeIDUri="urn:mpeg:dash:role:2011" value="subtitle"/>.
   */
  Accessibility?: WebvttAccessibilitySubs | string;

  /**
   * To use the available style, color, and position information from your input captions: Set Style passthrough (stylePassthrough) to Enabled (ENABLED). MediaConvert uses default settings when style and position information is missing from your input captions. To recreate the input captions exactly: Set Style passthrough to Strict (STRICT). MediaConvert automatically applies timing adjustments, including adjustments for frame rate conversion, ad avails, and input clipping. Your input captions format must be WebVTT. To ignore the style and position information from your input captions and use simplified output captions: Set Style passthrough to Disabled (DISABLED), or leave blank.
   */
  StylePassthrough?: WebvttStylePassthrough | string;
}

/**
 * @public
 * Settings related to one captions tab on the MediaConvert console. In your job JSON, an instance of captions DestinationSettings is equivalent to one captions tab in the console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.
 */
export interface CaptionDestinationSettings {
  /**
   * Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to BURN_IN.
   */
  BurninDestinationSettings?: BurninDestinationSettings;

  /**
   * Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Note that your choice of video output container constrains your choice of output captions format. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/captions-support-tables.html. If you are using SCTE-20 and you want to create an output that complies with the SCTE-43 spec, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED). To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20).
   */
  DestinationType?: CaptionDestinationType | string;

  /**
   * Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to DVB_SUB.
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings;

  /**
   * Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to EMBEDDED, EMBEDDED_PLUS_SCTE20, or SCTE20_PLUS_EMBEDDED.
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings;

  /**
   * Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to IMSC.
   */
  ImscDestinationSettings?: ImscDestinationSettings;

  /**
   * Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to SCC.
   */
  SccDestinationSettings?: SccDestinationSettings;

  /**
   * Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to SRT.
   */
  SrtDestinationSettings?: SrtDestinationSettings;

  /**
   * Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to TELETEXT.
   */
  TeletextDestinationSettings?: TeletextDestinationSettings;

  /**
   * Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to TTML.
   */
  TtmlDestinationSettings?: TtmlDestinationSettings;

  /**
   * Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to WebVTT.
   */
  WebvttDestinationSettings?: WebvttDestinationSettings;
}

/**
 * @public
 * This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.
 */
export interface CaptionDescription {
  /**
   * Specifies which "Caption Selector":#inputs-caption_selector to use from each input when generating captions. The name should be of the format "Caption Selector <N>", which denotes that the Nth Caption Selector will be used from each input.
   */
  CaptionSelectorName?: string;

  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   */
  CustomLanguageCode?: string;

  /**
   * Settings related to one captions tab on the MediaConvert console. In your job JSON, an instance of captions DestinationSettings is equivalent to one captions tab in the console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.
   */
  DestinationSettings?: CaptionDestinationSettings;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   */
  LanguageDescription?: string;
}

/**
 * @public
 * Caption Description for preset
 */
export interface CaptionDescriptionPreset {
  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   */
  CustomLanguageCode?: string;

  /**
   * Settings related to one captions tab on the MediaConvert console. In your job JSON, an instance of captions DestinationSettings is equivalent to one captions tab in the console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.
   */
  DestinationSettings?: CaptionDestinationSettings;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   */
  LanguageDescription?: string;
}

/**
 * @public
 * Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group.
 */
export interface CmafAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

/**
 * @public
 * Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 */
export interface DashAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your DASH group is film-name.mpd. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.mpd.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

/**
 * @public
 * Describes an account-specific API endpoint.
 */
export interface Endpoint {
  /**
   * URL of endpoint
   */
  Url?: string;
}

/**
 * @public
 * Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 */
export interface HlsAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

/**
 * @public
 * @enum
 */
export const HlsAdMarkers = {
  ELEMENTAL: "ELEMENTAL",
  ELEMENTAL_SCTE35: "ELEMENTAL_SCTE35",
} as const;

/**
 * @public
 */
export type HlsAdMarkers = (typeof HlsAdMarkers)[keyof typeof HlsAdMarkers];

/**
 * @public
 * Caption Language Mapping
 */
export interface HlsCaptionLanguageMapping {
  /**
   * Caption channel.
   */
  CaptionChannel?: number;

  /**
   * Specify the language for this captions channel, using the ISO 639-2 or ISO 639-3 three-letter language code
   */
  CustomLanguageCode?: string;

  /**
   * Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Caption language description.
   */
  LanguageDescription?: string;
}

/**
 * @public
 * Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.
 */
export interface HopDestination {
  /**
   * Optional. When you set up a job to use queue hopping, you can specify a different relative priority for the job in the destination queue. If you don't specify, the relative priority will remain the same as in the previous queue.
   */
  Priority?: number;

  /**
   * Optional unless the job is submitted on the default queue. When you set up a job to use queue hopping, you can specify a destination queue. This queue cannot be the original queue to which the job is submitted. If the original queue isn't the default queue and you don't specify the destination queue, the job will move to the default queue.
   */
  Queue?: string;

  /**
   * Required for setting up a job to use queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. Valid range is 1 to 4320 minutes, inclusive.
   */
  WaitMinutes?: number;
}

/**
 * @public
 * To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion (Id3Insertion).
 */
export interface Id3Insertion {
  /**
   * Use ID3 tag (Id3) to provide a fully formed ID3 tag in base64-encode format.
   */
  Id3?: string;

  /**
   * Provide a Timecode (TimeCode) in HH:MM:SS:FF or HH:MM:SS;FF format.
   */
  Timecode?: string;
}

/**
 * @public
 * @enum
 */
export const AdvancedInputFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AdvancedInputFilter = (typeof AdvancedInputFilter)[keyof typeof AdvancedInputFilter];

/**
 * @public
 * @enum
 */
export const AdvancedInputFilterAddTexture = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AdvancedInputFilterAddTexture =
  (typeof AdvancedInputFilterAddTexture)[keyof typeof AdvancedInputFilterAddTexture];

/**
 * @public
 * @enum
 */
export const AdvancedInputFilterSharpen = {
  HIGH: "HIGH",
  LOW: "LOW",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type AdvancedInputFilterSharpen = (typeof AdvancedInputFilterSharpen)[keyof typeof AdvancedInputFilterSharpen];

/**
 * @public
 * Optional settings for Advanced input filter when you set Advanced input filter to Enabled.
 */
export interface AdvancedInputFilterSettings {
  /**
   * Add texture and detail to areas of your input video content that were lost after applying the Advanced input filter. To adaptively add texture and reduce softness: Choose Enabled. To not add any texture: Keep the default value, Disabled. We recommend that you choose Disabled for input video content that doesn't have texture, including screen recordings, computer graphics, or cartoons.
   */
  AddTexture?: AdvancedInputFilterAddTexture | string;

  /**
   * Optionally specify the amount of sharpening to apply when you use the Advanced input filter. Sharpening adds contrast to the edges of your video content and can reduce softness. To apply no sharpening: Keep the default value, Off. To apply a minimal amount of sharpening choose Low, or for the maximum choose High.
   */
  Sharpening?: AdvancedInputFilterSharpen | string;
}

/**
 * @public
 * Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab (AudioDescription). Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.
 */
export interface AudioSelectorGroup {
  /**
   * Name of an Audio Selector within the same input to include in the group. Audio selector names are standardized, based on their order within the input (e.g., "Audio Selector 1"). The audio selector name parameter can be repeated to add any number of audio selectors to the group.
   */
  AudioSelectorNames?: string[];
}

/**
 * @public
 * @enum
 */
export const AudioDurationCorrection = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
  FRAME: "FRAME",
  TRACK: "TRACK",
} as const;

/**
 * @public
 */
export type AudioDurationCorrection = (typeof AudioDurationCorrection)[keyof typeof AudioDurationCorrection];

/**
 * @public
 * @enum
 */
export const AudioDefaultSelection = {
  DEFAULT: "DEFAULT",
  NOT_DEFAULT: "NOT_DEFAULT",
} as const;

/**
 * @public
 */
export type AudioDefaultSelection = (typeof AudioDefaultSelection)[keyof typeof AudioDefaultSelection];

/**
 * @public
 * Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead.
 */
export interface HlsRenditionGroupSettings {
  /**
   * Optional. Specify alternative group ID
   */
  RenditionGroupId?: string;

  /**
   * Optional. Specify ISO 639-2 or ISO 639-3 code in the language property
   */
  RenditionLanguageCode?: LanguageCode | string;

  /**
   * Optional. Specify media name
   */
  RenditionName?: string;
}

/**
 * @public
 * @enum
 */
export const AudioSelectorType = {
  HLS_RENDITION_GROUP: "HLS_RENDITION_GROUP",
  LANGUAGE_CODE: "LANGUAGE_CODE",
  PID: "PID",
  TRACK: "TRACK",
} as const;

/**
 * @public
 */
export type AudioSelectorType = (typeof AudioSelectorType)[keyof typeof AudioSelectorType];

/**
 * @public
 * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
 */
export interface AudioSelector {
  /**
   * Apply audio timing corrections to help synchronize audio and video in your output. To apply timing corrections, your input must meet the following requirements: * Container: MP4, or MOV, with an accurate time-to-sample (STTS) table. * Audio track: AAC. Choose from the following audio timing correction settings: * Disabled (Default): Apply no correction. * Auto: Recommended for most inputs. MediaConvert analyzes the audio timing in your input and determines which correction setting to use, if needed. * Track: Adjust the duration of each audio frame by a constant amount to align the audio track length with STTS duration. Track-level correction does not affect pitch, and is recommended for tonal audio content such as music. * Frame: Adjust the duration of each audio frame by a variable amount to align audio frames with STTS timestamps. No corrections are made to already-aligned frames. Frame-level correction may affect the pitch of corrected frames, and is recommended for atonal audio content such as speech or percussion.
   */
  AudioDurationCorrection?: AudioDurationCorrection | string;

  /**
   * Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code
   */
  CustomLanguageCode?: string;

  /**
   * Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.
   */
  DefaultSelection?: AudioDefaultSelection | string;

  /**
   * Specifies audio data from an external file source.
   */
  ExternalAudioFileInput?: string;

  /**
   * Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead.
   */
  HlsRenditionGroupSettings?: HlsRenditionGroupSettings;

  /**
   * Selects a specific language code from within an audio source.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specifies a time delta in milliseconds to offset the audio from the input video.
   */
  Offset?: number;

  /**
   * Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101).
   */
  Pids?: number[];

  /**
   * Use this setting for input streams that contain Dolby E, to have the service extract specific program data from the track. To select multiple programs, create multiple selectors with the same Track and different Program numbers. In the console, this setting is visible when you set Selector type to Track. Choose the program number from the dropdown list. If you are sending a JSON file, provide the program ID, which is part of the audio metadata. If your input file has incorrect metadata, you can choose All channels instead of a program number to have the service ignore the program IDs and include all the programs in the track.
   */
  ProgramSelection?: number;

  /**
   * Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other.
   */
  RemixSettings?: RemixSettings;

  /**
   * Specifies the type of the audio selector.
   */
  SelectorType?: AudioSelectorType | string;

  /**
   * Identify a track from the input audio to include in this selector by entering the track index number. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For examle, type "1,2,3" to include tracks 1 through 3. Specifying directly in your JSON job file, provide the track numbers in an array. For example, "tracks": [1,2,3].
   */
  Tracks?: number[];
}

/**
 * @public
 * @enum
 */
export const AncillaryConvert608To708 = {
  DISABLED: "DISABLED",
  UPCONVERT: "UPCONVERT",
} as const;

/**
 * @public
 */
export type AncillaryConvert608To708 = (typeof AncillaryConvert608To708)[keyof typeof AncillaryConvert608To708];

/**
 * @public
 * @enum
 */
export const AncillaryTerminateCaptions = {
  DISABLED: "DISABLED",
  END_OF_INPUT: "END_OF_INPUT",
} as const;

/**
 * @public
 */
export type AncillaryTerminateCaptions = (typeof AncillaryTerminateCaptions)[keyof typeof AncillaryTerminateCaptions];

/**
 * @public
 * Settings for ancillary captions source.
 */
export interface AncillarySourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   */
  Convert608To708?: AncillaryConvert608To708 | string;

  /**
   * Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough.
   */
  SourceAncillaryChannelNumber?: number;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   */
  TerminateCaptions?: AncillaryTerminateCaptions | string;
}

/**
 * @public
 * DVB Sub Source Settings
 */
export interface DvbSubSourceSettings {
  /**
   * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   */
  Pid?: number;
}

/**
 * @public
 * @enum
 */
export const EmbeddedConvert608To708 = {
  DISABLED: "DISABLED",
  UPCONVERT: "UPCONVERT",
} as const;

/**
 * @public
 */
export type EmbeddedConvert608To708 = (typeof EmbeddedConvert608To708)[keyof typeof EmbeddedConvert608To708];

/**
 * @public
 * @enum
 */
export const EmbeddedTerminateCaptions = {
  DISABLED: "DISABLED",
  END_OF_INPUT: "END_OF_INPUT",
} as const;

/**
 * @public
 */
export type EmbeddedTerminateCaptions = (typeof EmbeddedTerminateCaptions)[keyof typeof EmbeddedTerminateCaptions];

/**
 * @public
 * Settings for embedded captions Source
 */
export interface EmbeddedSourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   */
  Convert608To708?: EmbeddedConvert608To708 | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;

  /**
   * Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'.
   */
  Source608TrackNumber?: number;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   */
  TerminateCaptions?: EmbeddedTerminateCaptions | string;
}

/**
 * @public
 * @enum
 */
export const FileSourceConvert608To708 = {
  DISABLED: "DISABLED",
  UPCONVERT: "UPCONVERT",
} as const;

/**
 * @public
 */
export type FileSourceConvert608To708 = (typeof FileSourceConvert608To708)[keyof typeof FileSourceConvert608To708];

/**
 * @public
 * @enum
 */
export const CaptionSourceConvertPaintOnToPopOn = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CaptionSourceConvertPaintOnToPopOn =
  (typeof CaptionSourceConvertPaintOnToPopOn)[keyof typeof CaptionSourceConvertPaintOnToPopOn];

/**
 * @public
 * Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. When you work directly in your JSON job specification, use the settings framerateNumerator and framerateDenominator. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.
 */
export interface CaptionSourceFramerate {
  /**
   * Specify the denominator of the fraction that represents the frame rate for the setting Caption source frame rate (CaptionSourceFramerate). Use this setting along with the setting Framerate numerator (framerateNumerator).
   */
  FramerateDenominator?: number;

  /**
   * Specify the numerator of the fraction that represents the frame rate for the setting Caption source frame rate (CaptionSourceFramerate). Use this setting along with the setting Framerate denominator (framerateDenominator).
   */
  FramerateNumerator?: number;
}

/**
 * @public
 * @enum
 */
export const FileSourceTimeDeltaUnits = {
  MILLISECONDS: "MILLISECONDS",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type FileSourceTimeDeltaUnits = (typeof FileSourceTimeDeltaUnits)[keyof typeof FileSourceTimeDeltaUnits];

/**
 * @public
 * If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 */
export interface FileSourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   */
  Convert608To708?: FileSourceConvert608To708 | string;

  /**
   * Choose the presentation style of your input SCC captions. To use the same presentation style as your input: Keep the default value, Disabled. To convert paint-on captions to pop-on: Choose Enabled. We also recommend that you choose Enabled if you notice additional repeated lines in your output captions.
   */
  ConvertPaintToPop?: CaptionSourceConvertPaintOnToPopOn | string;

  /**
   * Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. When you work directly in your JSON job specification, use the settings framerateNumerator and framerateDenominator. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.
   */
  Framerate?: CaptionSourceFramerate;

  /**
   * External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', 'xml', 'smi', 'webvtt', and 'vtt'.
   */
  SourceFile?: string;

  /**
   * Optional. Use this setting when you need to adjust the sync between your sidecar captions and your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/time-delta-use-cases.html. Enter a positive or negative number to modify the times in the captions file. For example, type 15 to add 15 seconds to all the times in the captions file. Type -5 to subtract 5 seconds from the times in the captions file. You can optionally specify your time delta in milliseconds instead of seconds. When you do so, set the related setting, Time delta units (TimeDeltaUnits) to Milliseconds (MILLISECONDS). Note that, when you specify a time delta for timecode-based caption sources, such as SCC and STL, and your time delta isn't a multiple of the input frame rate, MediaConvert snaps the captions to the nearest frame. For example, when your input video frame rate is 25 fps and you specify 1010ms for time delta, MediaConvert delays your captions by 1000 ms.
   */
  TimeDelta?: number;

  /**
   * When you use the setting Time delta (TimeDelta) to adjust the sync between your sidecar captions and your video, use this setting to specify the units for the delta that you specify. When you don't specify a value for Time delta units (TimeDeltaUnits), MediaConvert uses seconds by default.
   */
  TimeDeltaUnits?: FileSourceTimeDeltaUnits | string;
}

/**
 * @public
 * @enum
 */
export const CaptionSourceType = {
  ANCILLARY: "ANCILLARY",
  DVB_SUB: "DVB_SUB",
  EMBEDDED: "EMBEDDED",
  IMSC: "IMSC",
  NULL_SOURCE: "NULL_SOURCE",
  SCC: "SCC",
  SCTE20: "SCTE20",
  SMI: "SMI",
  SMPTE_TT: "SMPTE_TT",
  SRT: "SRT",
  STL: "STL",
  TELETEXT: "TELETEXT",
  TTML: "TTML",
  WEBVTT: "WEBVTT",
} as const;

/**
 * @public
 */
export type CaptionSourceType = (typeof CaptionSourceType)[keyof typeof CaptionSourceType];

/**
 * @public
 * Settings specific to Teletext caption sources, including Page number.
 */
export interface TeletextSourceSettings {
  /**
   * Use Page Number (PageNumber) to specify the three-digit hexadecimal page number that will be used for Teletext captions. Do not use this setting if you are passing through teletext from the input source to output.
   */
  PageNumber?: string;
}

/**
 * @public
 * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
 */
export interface TrackSourceSettings {
  /**
   * Use this setting to select a single captions track from a source. Track numbers correspond to the order in the captions source file. For IMF sources, track numbering is based on the order that the captions appear in the CPL. For example, use 1 to select the captions asset that is listed first in the CPL. To include more than one captions track in your job outputs, create multiple input captions selectors. Specify one track per selector.
   */
  TrackNumber?: number;
}

/**
 * @public
 * Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings.
 */
export interface WebvttHlsSourceSettings {
  /**
   * Optional. Specify alternative group ID
   */
  RenditionGroupId?: string;

  /**
   * Optional. Specify ISO 639-2 or ISO 639-3 code in the language property
   */
  RenditionLanguageCode?: LanguageCode | string;

  /**
   * Optional. Specify media name
   */
  RenditionName?: string;
}

/**
 * @public
 * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 */
export interface CaptionSourceSettings {
  /**
   * Settings for ancillary captions source.
   */
  AncillarySourceSettings?: AncillarySourceSettings;

  /**
   * DVB Sub Source Settings
   */
  DvbSubSourceSettings?: DvbSubSourceSettings;

  /**
   * Settings for embedded captions Source
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings;

  /**
   * If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   */
  FileSourceSettings?: FileSourceSettings;

  /**
   * Use Source (SourceType) to identify the format of your input captions. The service cannot auto-detect caption format.
   */
  SourceType?: CaptionSourceType | string;

  /**
   * Settings specific to Teletext caption sources, including Page number.
   */
  TeletextSourceSettings?: TeletextSourceSettings;

  /**
   * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
   */
  TrackSourceSettings?: TrackSourceSettings;

  /**
   * Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings.
   */
  WebvttHlsSourceSettings?: WebvttHlsSourceSettings;
}

/**
 * @public
 * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 20 captions selectors per input.
 */
export interface CaptionSelector {
  /**
   * The specific language to extract from source, using the ISO 639-2 or ISO 639-3 three-letter language code. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   */
  CustomLanguageCode?: string;

  /**
   * The specific language to extract from source. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   */
  SourceSettings?: CaptionSourceSettings;
}

/**
 * @public
 * Use Rectangle to identify a specific area of the video frame.
 */
export interface Rectangle {
  /**
   * Height of rectangle in pixels. Specify only even numbers.
   */
  Height?: number;

  /**
   * Width of rectangle in pixels. Specify only even numbers.
   */
  Width?: number;

  /**
   * The distance, in pixels, between the rectangle and the left edge of the video frame. Specify only even numbers.
   */
  X?: number;

  /**
   * The distance, in pixels, between the rectangle and the top edge of the video frame. Specify only even numbers.
   */
  Y?: number;
}

/**
 * @public
 * @enum
 */
export const InputDeblockFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type InputDeblockFilter = (typeof InputDeblockFilter)[keyof typeof InputDeblockFilter];

/**
 * @public
 * @enum
 */
export const DecryptionMode = {
  AES_CBC: "AES_CBC",
  AES_CTR: "AES_CTR",
  AES_GCM: "AES_GCM",
} as const;

/**
 * @public
 */
export type DecryptionMode = (typeof DecryptionMode)[keyof typeof DecryptionMode];

/**
 * @public
 * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
 */
export interface InputDecryptionSettings {
  /**
   * Specify the encryption mode that you used to encrypt your input files.
   */
  DecryptionMode?: DecryptionMode | string;

  /**
   * Warning! Don't provide your encryption key in plaintext. Your job settings could be intercepted, making your encrypted content vulnerable. Specify the encrypted version of the data key that you used to encrypt your content. The data key must be encrypted by AWS Key Management Service (KMS). The key can be 128, 192, or 256 bits.
   */
  EncryptedDecryptionKey?: string;

  /**
   * Specify the initialization vector that you used when you encrypted your content before uploading it to Amazon S3. You can use a 16-byte initialization vector with any encryption mode. Or, you can use a 12-byte initialization vector with GCM or CTR. MediaConvert accepts only initialization vectors that are base64-encoded.
   */
  InitializationVector?: string;

  /**
   * Specify the AWS Region for AWS Key Management Service (KMS) that you used to encrypt your data key, if that Region is different from the one you are using for AWS Elemental MediaConvert.
   */
  KmsKeyRegion?: string;
}

/**
 * @public
 * @enum
 */
export const InputDenoiseFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type InputDenoiseFilter = (typeof InputDenoiseFilter)[keyof typeof InputDenoiseFilter];

/**
 * @public
 * @enum
 */
export const InputFilterEnable = {
  AUTO: "AUTO",
  DISABLE: "DISABLE",
  FORCE: "FORCE",
} as const;

/**
 * @public
 */
export type InputFilterEnable = (typeof InputFilterEnable)[keyof typeof InputFilterEnable];

/**
 * @public
 * These settings apply to a specific graphic overlay. You can include multiple overlays in your job.
 */
export interface InsertableImage {
  /**
   * Specify the time, in milliseconds, for the image to remain on the output video. This duration includes fade-in time but not fade-out time.
   */
  Duration?: number;

  /**
   * Specify the length of time, in milliseconds, between the Start time that you specify for the image insertion and the time that the image appears at full opacity. Full opacity is the level that you specify for the opacity setting. If you don't specify a value for Fade-in, the image will appear abruptly at the overlay start time.
   */
  FadeIn?: number;

  /**
   * Specify the length of time, in milliseconds, between the end of the time that you have specified for the image overlay Duration and when the overlaid image has faded to total transparency. If you don't specify a value for Fade-out, the image will disappear abruptly at the end of the inserted image duration.
   */
  FadeOut?: number;

  /**
   * Specify the height of the inserted image in pixels. If you specify a value that's larger than the video resolution height, the service will crop your overlaid image to fit. To use the native height of the image, keep this setting blank.
   */
  Height?: number;

  /**
   * Specify the HTTP, HTTPS, or Amazon S3 location of the image that you want to overlay on the video. Use a PNG or TGA file.
   */
  ImageInserterInput?: string;

  /**
   * Specify the distance, in pixels, between the inserted image and the left edge of the video frame. Required for any image overlay that you specify.
   */
  ImageX?: number;

  /**
   * Specify the distance, in pixels, between the overlaid image and the top edge of the video frame. Required for any image overlay that you specify.
   */
  ImageY?: number;

  /**
   * Specify how overlapping inserted images appear. Images with higher values for Layer appear on top of images with lower values for Layer.
   */
  Layer?: number;

  /**
   * Use Opacity (Opacity) to specify how much of the underlying video shows through the inserted image. 0 is transparent and 100 is fully opaque. Default is 50.
   */
  Opacity?: number;

  /**
   * Specify the timecode of the frame that you want the overlay to first appear on. This must be in timecode (HH:MM:SS:FF or HH:MM:SS;FF) format. Remember to take into account your timecode source settings.
   */
  StartTime?: string;

  /**
   * Specify the width of the inserted image in pixels. If you specify a value that's larger than the video resolution width, the service will crop your overlaid image to fit. To use the native width of the image, keep this setting blank.
   */
  Width?: number;
}

/**
 * @public
 * Use the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/graphic-overlay.html. This setting is disabled by default.
 */
export interface ImageInserter {
  /**
   * Specify the images that you want to overlay on your video. The images must be PNG or TGA files.
   */
  InsertableImages?: InsertableImage[];

  /**
   * Specify the reference white level, in nits, for all of your image inserter images. Use to correct brightness levels within HDR10 outputs. For 1,000 nit peak brightness displays, we recommend that you set SDR reference white level to 203 (according to ITU-R BT.2408). Leave blank to use the default value of 100, or specify an integer from 100 to 1000.
   */
  SdrReferenceWhiteLevel?: number;
}

/**
 * @public
 * To transcode only portions of your input, include one input clip for each part of your input that you want in your output. All input clips that you specify will be included in every output of the job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html.
 */
export interface InputClipping {
  /**
   * Set End timecode (EndTimecode) to the end of the portion of the input you are clipping. The frame corresponding to the End timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for timecode source under input settings (InputTimecodeSource). For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to end six minutes into the video, use 01:06:00:00.
   */
  EndTimecode?: string;

  /**
   * Set Start timecode (StartTimecode) to the beginning of the portion of the input you are clipping. The frame corresponding to the Start timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for Input timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to begin five minutes into the video, use 01:05:00:00.
   */
  StartTimecode?: string;
}

/**
 * @public
 * @enum
 */
export const InputScanType = {
  AUTO: "AUTO",
  PSF: "PSF",
} as const;

/**
 * @public
 */
export type InputScanType = (typeof InputScanType)[keyof typeof InputScanType];

/**
 * @public
 * @enum
 */
export const InputPsiControl = {
  IGNORE_PSI: "IGNORE_PSI",
  USE_PSI: "USE_PSI",
} as const;

/**
 * @public
 */
export type InputPsiControl = (typeof InputPsiControl)[keyof typeof InputPsiControl];

/**
 * @public
 * @enum
 */
export const InputTimecodeSource = {
  EMBEDDED: "EMBEDDED",
  SPECIFIEDSTART: "SPECIFIEDSTART",
  ZEROBASED: "ZEROBASED",
} as const;

/**
 * @public
 */
export type InputTimecodeSource = (typeof InputTimecodeSource)[keyof typeof InputTimecodeSource];

/**
 * @public
 * When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html
 */
export interface InputVideoGenerator {
  /**
   * Specify an integer value for Black video duration from 50 to 86400000 to generate a black video input for that many milliseconds. Required when you include Video generator.
   */
  Duration?: number;
}

/**
 * @public
 * @enum
 */
export const AlphaBehavior = {
  DISCARD: "DISCARD",
  REMAP_TO_LUMA: "REMAP_TO_LUMA",
} as const;

/**
 * @public
 */
export type AlphaBehavior = (typeof AlphaBehavior)[keyof typeof AlphaBehavior];

/**
 * @public
 * @enum
 */
export const ColorSpace = {
  FOLLOW: "FOLLOW",
  HDR10: "HDR10",
  HLG_2020: "HLG_2020",
  P3D65_HDR: "P3D65_HDR",
  P3D65_SDR: "P3D65_SDR",
  P3DCI: "P3DCI",
  REC_601: "REC_601",
  REC_709: "REC_709",
} as const;

/**
 * @public
 */
export type ColorSpace = (typeof ColorSpace)[keyof typeof ColorSpace];

/**
 * @public
 * @enum
 */
export const ColorSpaceUsage = {
  FALLBACK: "FALLBACK",
  FORCE: "FORCE",
} as const;

/**
 * @public
 */
export type ColorSpaceUsage = (typeof ColorSpaceUsage)[keyof typeof ColorSpaceUsage];

/**
 * @public
 * @enum
 */
export const EmbeddedTimecodeOverride = {
  NONE: "NONE",
  USE_MDPM: "USE_MDPM",
} as const;

/**
 * @public
 */
export type EmbeddedTimecodeOverride = (typeof EmbeddedTimecodeOverride)[keyof typeof EmbeddedTimecodeOverride];

/**
 * @public
 * Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator.
 */
export interface Hdr10Metadata {
  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  BluePrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  BluePrimaryY?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  GreenPrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  GreenPrimaryY?: number;

  /**
   * Maximum light level among all samples in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.
   */
  MaxContentLightLevel?: number;

  /**
   * Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.
   */
  MaxFrameAverageLightLevel?: number;

  /**
   * Nominal maximum mastering display luminance in units of of 0.0001 candelas per square meter.
   */
  MaxLuminance?: number;

  /**
   * Nominal minimum mastering display luminance in units of of 0.0001 candelas per square meter
   */
  MinLuminance?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  RedPrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  RedPrimaryY?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  WhitePointX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  WhitePointY?: number;
}

/**
 * @public
 * @enum
 */
export const PadVideo = {
  BLACK: "BLACK",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type PadVideo = (typeof PadVideo)[keyof typeof PadVideo];

/**
 * @public
 * @enum
 */
export const InputRotate = {
  AUTO: "AUTO",
  DEGREES_180: "DEGREES_180",
  DEGREES_270: "DEGREES_270",
  DEGREES_90: "DEGREES_90",
  DEGREE_0: "DEGREE_0",
} as const;

/**
 * @public
 */
export type InputRotate = (typeof InputRotate)[keyof typeof InputRotate];

/**
 * @public
 * @enum
 */
export const InputSampleRange = {
  FOLLOW: "FOLLOW",
  FULL_RANGE: "FULL_RANGE",
  LIMITED_RANGE: "LIMITED_RANGE",
} as const;

/**
 * @public
 */
export type InputSampleRange = (typeof InputSampleRange)[keyof typeof InputSampleRange];

/**
 * @public
 * Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.
 */
export interface VideoSelector {
  /**
   * Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs.
   */
  AlphaBehavior?: AlphaBehavior | string;

  /**
   * If your input video has accurate color space metadata, or if you don't know about color space: Keep the default value, Follow. MediaConvert will automatically detect your input color space. If your input video has metadata indicating the wrong color space, or has missing metadata: Specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate: Choose Force HDR 10. Specify correct values in the input HDR 10 metadata settings. For more information about HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr. When you specify an input color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:
   *  * HDR 10: BT.2020, PQ, BT.2020 non-constant
   *  * HLG 2020: BT.2020, HLG, BT.2020 non-constant
   *  * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709
   *  * P3D65 (SDR): Display P3, sRGB, BT.709
   *  * P3D65 (HDR): Display P3, PQ, BT.709
   */
  ColorSpace?: ColorSpace | string;

  /**
   * There are two sources for color metadata, the input file and the job input settings Color space (ColorSpace) and HDR master display information settings(Hdr10Metadata). The Color space usage setting determines which takes precedence. Choose Force (FORCE) to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback (FALLBACK) to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings.
   */
  ColorSpaceUsage?: ColorSpaceUsage | string;

  /**
   * Set Embedded timecode override (embeddedTimecodeOverride) to Use MDPM (USE_MDPM) when your AVCHD input contains timecode tag data in the Modified Digital Video Pack Metadata (MDPM). When you do, we recommend you also set Timecode source (inputTimecodeSource) to Embedded (EMBEDDED). Leave Embedded timecode override blank, or set to None (NONE), when your input does not contain MDPM timecode.
   */
  EmbeddedTimecodeOverride?: EmbeddedTimecodeOverride | string;

  /**
   * Use these settings to provide HDR 10 metadata that is missing or inaccurate in your input video. Appropriate values vary depending on the input video and must be provided by a color grader. The color grader generates these values during the HDR 10 mastering process. The valid range for each of these settings is 0 to 50,000. Each increment represents 0.00002 in CIE1931 color coordinate. Related settings - When you specify these values, you must also set Color space (ColorSpace) to HDR 10 (HDR10). To specify whether the the values you specify here take precedence over the values in the metadata of your input file, set Color space usage (ColorSpaceUsage). To specify whether color metadata is included in an output, set Color metadata (ColorMetadata). For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   */
  Hdr10Metadata?: Hdr10Metadata;

  /**
   * Use this setting if your input has video and audio durations that don't align, and your output or player has strict alignment requirements. Examples: Input audio track has a delayed start. Input video track ends before audio ends. When you set Pad video (padVideo) to Black (BLACK), MediaConvert generates black video frames so that output video and audio durations match. Black video frames are added at the beginning or end, depending on your input. To keep the default behavior and not generate black video, set Pad video to Disabled (DISABLED) or leave blank.
   */
  PadVideo?: PadVideo | string;

  /**
   * Use PID (Pid) to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container.
   */
  Pid?: number;

  /**
   * Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported.
   */
  ProgramNumber?: number;

  /**
   * Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.
   */
  Rotate?: InputRotate | string;

  /**
   * If the sample range metadata in your input video is accurate, or if you don't know about sample range, keep the default value, Follow (FOLLOW), for this setting. When you do, the service automatically detects your input sample range. If your input video has metadata indicating the wrong sample range, specify the accurate sample range here. When you do, MediaConvert ignores any sample range information in the input metadata. Regardless of whether MediaConvert uses the input sample range or the sample range that you specify, MediaConvert uses the sample range for transcoding and also writes it to the output metadata.
   */
  SampleRange?: InputSampleRange | string;
}

/**
 * @public
 * Use inputs to define the source files used in your transcoding job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/specify-input-settings.html. You can use multiple video inputs to do input stitching. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html
 */
export interface Input {
  /**
   * Use to remove noise, blocking, blurriness, or ringing from your input as a pre-filter step before encoding. The Advanced input filter removes more types of compression artifacts and is an improvement when compared to basic Deblock and Denoise filters. To remove video compression artifacts from your input and improve the video quality: Choose Enabled. Additionally, this filter can help increase the video quality of your output relative to its bitrate, since noisy inputs are more complex and require more bits to encode. To help restore loss of detail after applying the filter, you can optionally add texture or sharpening as an additional step.Jobs that use this feature incur pro-tier pricing. To not apply advanced input filtering: Choose Disabled. Note that you can still apply basic filtering with Deblock and Denoise.
   */
  AdvancedInputFilter?: AdvancedInputFilter | string;

  /**
   * Optional settings for Advanced input filter when you set Advanced input filter to Enabled.
   */
  AdvancedInputFilterSettings?: AdvancedInputFilterSettings;

  /**
   * Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab (AudioDescription). Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.
   */
  AudioSelectorGroups?: Record<string, AudioSelectorGroup>;

  /**
   * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
   */
  AudioSelectors?: Record<string, AudioSelector>;

  /**
   * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 20 captions selectors per input.
   */
  CaptionSelectors?: Record<string, CaptionSelector>;

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
   */
  Crop?: Rectangle;

  /**
   * Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.
   */
  DeblockFilter?: InputDeblockFilter | string;

  /**
   * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
   */
  DecryptionSettings?: InputDecryptionSettings;

  /**
   * Enable Denoise (InputDenoiseFilter) to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   */
  DenoiseFilter?: InputDenoiseFilter | string;

  /**
   * Use this setting only when your video source has Dolby Vision studio mastering metadata that is carried in a separate XML file. Specify the Amazon S3 location for the metadata XML file. MediaConvert uses this file to provide global and frame-level metadata for Dolby Vision preprocessing. When you specify a file here and your input also has interleaved global and frame level metadata, MediaConvert ignores the interleaved metadata and uses only the the metadata from this external XML file. Note that your IAM service role must grant MediaConvert read permissions to this file. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   */
  DolbyVisionMetadataXml?: string;

  /**
   * Specify the source file for your transcoding job. You can use multiple inputs in a single job. The service concatenates these inputs, in the order that you specify them in the job, to create the outputs. If your input format is IMF, specify your input by providing the path to your CPL. For example, "s3://bucket/vf/cpl.xml". If the CPL is in an incomplete IMP, make sure to use *Supplemental IMPs* (SupplementalImps) to specify any supplemental IMPs that contain assets referenced by the CPL.
   */
  FileInput?: string;

  /**
   * Specify whether to apply input filtering to improve the video quality of your input. To apply filtering depending on your input type and quality: Choose Auto. To apply no filtering: Choose Disable. To apply filtering regardless of your input type and quality: Choose Force. When you do, you must also specify a value for Filter strength.
   */
  FilterEnable?: InputFilterEnable | string;

  /**
   * Specify the strength of the input filter. To apply an automatic amount of filtering based the compression artifacts measured in your input: We recommend that you leave Filter strength blank and set Filter enable to Auto. To manually apply filtering: Enter a value from 1 to 5, where 1 is the least amount of filtering and 5 is the most. The value that you enter applies to the strength of the Deblock or Denoise filters, or to the strength of the Advanced input filter.
   */
  FilterStrength?: number;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   */
  InputClippings?: InputClipping[];

  /**
   * When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto (AUTO). Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.
   */
  InputScanType?: InputScanType | string;

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
   */
  Position?: Rectangle;

  /**
   * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   */
  ProgramNumber?: number;

  /**
   * Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.
   */
  PsiControl?: InputPsiControl | string;

  /**
   * Provide a list of any necessary supplemental IMPs. You need supplemental IMPs if the CPL that you're using for your input is in an incomplete IMP. Specify either the supplemental IMP directories with a trailing slash or the ASSETMAP.xml files. For example ["s3://bucket/ov/", "s3://bucket/vf2/ASSETMAP.xml"]. You don't need to specify the IMP that contains your input CPL, because the service automatically detects it.
   */
  SupplementalImps?: string[];

  /**
   * Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeSource?: InputTimecodeSource | string;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeStart?: string;

  /**
   * When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html
   */
  VideoGenerator?: InputVideoGenerator;

  /**
   * Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.
   */
  VideoSelector?: VideoSelector;
}

/**
 * @public
 * Specified video input in a template.
 */
export interface InputTemplate {
  /**
   * Use to remove noise, blocking, blurriness, or ringing from your input as a pre-filter step before encoding. The Advanced input filter removes more types of compression artifacts and is an improvement when compared to basic Deblock and Denoise filters. To remove video compression artifacts from your input and improve the video quality: Choose Enabled. Additionally, this filter can help increase the video quality of your output relative to its bitrate, since noisy inputs are more complex and require more bits to encode. To help restore loss of detail after applying the filter, you can optionally add texture or sharpening as an additional step.Jobs that use this feature incur pro-tier pricing. To not apply advanced input filtering: Choose Disabled. Note that you can still apply basic filtering with Deblock and Denoise.
   */
  AdvancedInputFilter?: AdvancedInputFilter | string;

  /**
   * Optional settings for Advanced input filter when you set Advanced input filter to Enabled.
   */
  AdvancedInputFilterSettings?: AdvancedInputFilterSettings;

  /**
   * Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab (AudioDescription). Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.
   */
  AudioSelectorGroups?: Record<string, AudioSelectorGroup>;

  /**
   * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
   */
  AudioSelectors?: Record<string, AudioSelector>;

  /**
   * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 20 captions selectors per input.
   */
  CaptionSelectors?: Record<string, CaptionSelector>;

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
   */
  Crop?: Rectangle;

  /**
   * Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.
   */
  DeblockFilter?: InputDeblockFilter | string;

  /**
   * Enable Denoise (InputDenoiseFilter) to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   */
  DenoiseFilter?: InputDenoiseFilter | string;

  /**
   * Use this setting only when your video source has Dolby Vision studio mastering metadata that is carried in a separate XML file. Specify the Amazon S3 location for the metadata XML file. MediaConvert uses this file to provide global and frame-level metadata for Dolby Vision preprocessing. When you specify a file here and your input also has interleaved global and frame level metadata, MediaConvert ignores the interleaved metadata and uses only the the metadata from this external XML file. Note that your IAM service role must grant MediaConvert read permissions to this file. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   */
  DolbyVisionMetadataXml?: string;

  /**
   * Specify whether to apply input filtering to improve the video quality of your input. To apply filtering depending on your input type and quality: Choose Auto. To apply no filtering: Choose Disable. To apply filtering regardless of your input type and quality: Choose Force. When you do, you must also specify a value for Filter strength.
   */
  FilterEnable?: InputFilterEnable | string;

  /**
   * Specify the strength of the input filter. To apply an automatic amount of filtering based the compression artifacts measured in your input: We recommend that you leave Filter strength blank and set Filter enable to Auto. To manually apply filtering: Enter a value from 1 to 5, where 1 is the least amount of filtering and 5 is the most. The value that you enter applies to the strength of the Deblock or Denoise filters, or to the strength of the Advanced input filter.
   */
  FilterStrength?: number;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   */
  InputClippings?: InputClipping[];

  /**
   * When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto (AUTO). Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.
   */
  InputScanType?: InputScanType | string;

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
   */
  Position?: Rectangle;

  /**
   * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   */
  ProgramNumber?: number;

  /**
   * Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.
   */
  PsiControl?: InputPsiControl | string;

  /**
   * Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeSource?: InputTimecodeSource | string;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeStart?: string;

  /**
   * Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.
   */
  VideoSelector?: VideoSelector;
}

/**
 * @public
 * @enum
 */
export const AccelerationMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  PREFERRED: "PREFERRED",
} as const;

/**
 * @public
 */
export type AccelerationMode = (typeof AccelerationMode)[keyof typeof AccelerationMode];

/**
 * @public
 * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
 */
export interface AccelerationSettings {
  /**
   * Specify the conditions when the service will run your job with accelerated transcoding.
   */
  Mode: AccelerationMode | string | undefined;
}

/**
 * @public
 * @enum
 */
export const AccelerationStatus = {
  ACCELERATED: "ACCELERATED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_ACCELERATED: "NOT_ACCELERATED",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;

/**
 * @public
 */
export type AccelerationStatus = (typeof AccelerationStatus)[keyof typeof AccelerationStatus];

/**
 * @public
 * @enum
 */
export const BillingTagsSource = {
  JOB: "JOB",
  JOB_TEMPLATE: "JOB_TEMPLATE",
  PRESET: "PRESET",
  QUEUE: "QUEUE",
} as const;

/**
 * @public
 */
export type BillingTagsSource = (typeof BillingTagsSource)[keyof typeof BillingTagsSource];

/**
 * @public
 * @enum
 */
export const JobPhase = {
  PROBING: "PROBING",
  TRANSCODING: "TRANSCODING",
  UPLOADING: "UPLOADING",
} as const;

/**
 * @public
 */
export type JobPhase = (typeof JobPhase)[keyof typeof JobPhase];

/**
 * @public
 * Provides messages from the service about jobs that you have already successfully submitted.
 */
export interface JobMessages {
  /**
   * List of messages that are informational only and don't indicate a problem with your job.
   */
  Info?: string[];

  /**
   * List of messages that warn about conditions that might cause your job not to run or to fail.
   */
  Warning?: string[];
}

/**
 * @public
 * Contains details about the output's video stream
 */
export interface VideoDetail {
  /**
   * Height in pixels for the output
   */
  HeightInPx?: number;

  /**
   * Width in pixels for the output
   */
  WidthInPx?: number;
}

/**
 * @public
 * Details regarding output
 */
export interface OutputDetail {
  /**
   * Duration in milliseconds
   */
  DurationInMs?: number;

  /**
   * Contains details about the output's video stream
   */
  VideoDetails?: VideoDetail;
}

/**
 * @public
 * Contains details about the output groups specified in the job settings.
 */
export interface OutputGroupDetail {
  /**
   * Details about the output
   */
  OutputDetails?: OutputDetail[];
}

/**
 * @public
 * Description of the source and destination queues between which the job has moved, along with the timestamp of the move
 */
export interface QueueTransition {
  /**
   * The queue that the job was on after the transition.
   */
  DestinationQueue?: string;

  /**
   * The queue that the job was on before the transition.
   */
  SourceQueue?: string;

  /**
   * The time, in Unix epoch format, that the job moved from the source queue to the destination queue.
   */
  Timestamp?: Date;
}

/**
 * @public
 * Use ad avail blanking settings to specify your output content during SCTE-35 triggered ad avails. You can blank your video or overlay it with an image. MediaConvert also removes any audio and embedded captions during the ad avail. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ad-avail-blanking.html.
 */
export interface AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: string;
}

/**
 * @public
 * ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025.
 */
export interface EsamManifestConfirmConditionNotification {
  /**
   * Provide your ESAM ManifestConfirmConditionNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the Manifest Conditioning instructions in the message that you supply.
   */
  MccXml?: string;
}

/**
 * @public
 * ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025.
 */
export interface EsamSignalProcessingNotification {
  /**
   * Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the signal processing instructions in the message that you supply. Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. For your MPEG2-TS file outputs, if you want the service to place SCTE-35 markers at the insertion points you specify in the XML document, you must also enable SCTE-35 ESAM (scte35Esam). Note that you can either specify an ESAM XML document or enable SCTE-35 passthrough. You can't do both.
   */
  SccXml?: string;
}

/**
 * @public
 * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
 */
export interface EsamSettings {
  /**
   * Specifies an ESAM ManifestConfirmConditionNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the manifest conditioning instructions that you provide in the setting MCC XML (mccXml).
   */
  ManifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification;

  /**
   * Specifies the stream distance, in milliseconds, between the SCTE 35 messages that the transcoder places and the splice points that they refer to. If the time between the start of the asset and the SCTE-35 message is less than this value, then the transcoder places the SCTE-35 marker at the beginning of the stream.
   */
  ResponseSignalPreroll?: number;

  /**
   * Specifies an ESAM SignalProcessingNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the signal processing instructions that you provide in the setting SCC XML (sccXml).
   */
  SignalProcessingNotification?: EsamSignalProcessingNotification;
}

/**
 * @public
 * @enum
 */
export const CopyProtectionAction = {
  PASSTHROUGH: "PASSTHROUGH",
  STRIP: "STRIP",
} as const;

/**
 * @public
 */
export type CopyProtectionAction = (typeof CopyProtectionAction)[keyof typeof CopyProtectionAction];

/**
 * @public
 * @enum
 */
export const VchipAction = {
  PASSTHROUGH: "PASSTHROUGH",
  STRIP: "STRIP",
} as const;

/**
 * @public
 */
export type VchipAction = (typeof VchipAction)[keyof typeof VchipAction];

/**
 * @public
 * If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.
 */
export interface ExtendedDataServices {
  /**
   * The action to take on copy and redistribution control XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.
   */
  CopyProtectionAction?: CopyProtectionAction | string;

  /**
   * The action to take on content advisory XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.
   */
  VchipAction?: VchipAction | string;
}

/**
 * @public
 * Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.
 */
export interface KantarWatermarkSettings {
  /**
   * Provide an audio channel name from your Kantar audio license.
   */
  ChannelName?: string;

  /**
   * Specify a unique identifier for Kantar to use for this piece of content.
   */
  ContentReference?: string;

  /**
   * Provide the name of the AWS Secrets Manager secret where your Kantar credentials are stored. Note that your MediaConvert service role must provide access to this secret. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/granting-permissions-for-mediaconvert-to-access-secrets-manager-secret.html. For instructions on creating a secret, see https://docs.aws.amazon.com/secretsmanager/latest/userguide/tutorials_basic.html, in the AWS Secrets Manager User Guide.
   */
  CredentialsSecretName?: string;

  /**
   * Optional. Specify an offset, in whole seconds, from the start of your output and the beginning of the watermarking. When you don't specify an offset, Kantar defaults to zero.
   */
  FileOffset?: number;

  /**
   * Provide your Kantar license ID number. You should get this number from Kantar.
   */
  KantarLicenseId?: number;

  /**
   * Provide the HTTPS endpoint to the Kantar server. You should get this endpoint from Kantar.
   */
  KantarServerUrl?: string;

  /**
   * Optional. Specify the Amazon S3 bucket where you want MediaConvert to store your Kantar watermark XML logs. When you don't specify a bucket, MediaConvert doesn't save these logs. Note that your MediaConvert service role must provide access to this location. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
   */
  LogDestination?: string;

  /**
   * You can optionally use this field to specify the first timestamp that Kantar embeds during watermarking. Kantar suggests that you be very cautious when using this Kantar feature, and that you use it only on channels that are managed specifically for use with this feature by your Audience Measurement Operator. For more information about this feature, contact Kantar technical support.
   */
  Metadata3?: string;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   */
  Metadata4?: string;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   */
  Metadata5?: string;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   */
  Metadata6?: string;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   */
  Metadata7?: string;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   */
  Metadata8?: string;
}

/**
 * @public
 * For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video.
 */
export interface MotionImageInsertionFramerate {
  /**
   * The bottom of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 1.
   */
  FramerateDenominator?: number;

  /**
   * The top of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 24.
   */
  FramerateNumerator?: number;
}

/**
 * @public
 * @enum
 */
export const MotionImageInsertionMode = {
  MOV: "MOV",
  PNG: "PNG",
} as const;

/**
 * @public
 */
export type MotionImageInsertionMode = (typeof MotionImageInsertionMode)[keyof typeof MotionImageInsertionMode];

/**
 * @public
 * Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay.
 */
export interface MotionImageInsertionOffset {
  /**
   * Set the distance, in pixels, between the overlay and the left edge of the video frame.
   */
  ImageX?: number;

  /**
   * Set the distance, in pixels, between the overlay and the top edge of the video frame.
   */
  ImageY?: number;
}

/**
 * @public
 * @enum
 */
export const MotionImagePlayback = {
  ONCE: "ONCE",
  REPEAT: "REPEAT",
} as const;

/**
 * @public
 */
export type MotionImagePlayback = (typeof MotionImagePlayback)[keyof typeof MotionImagePlayback];

/**
 * @public
 * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.
 */
export interface MotionImageInserter {
  /**
   * If your motion graphic asset is a .mov file, keep this setting unspecified. If your motion graphic asset is a series of .png files, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. Make sure that the number of images in your series matches the frame rate and your intended overlay duration. For example, if you want a 30-second overlay at 30 fps, you should have 900 .png images. This overlay frame rate doesn't need to match the frame rate of the underlying video.
   */
  Framerate?: MotionImageInsertionFramerate;

  /**
   * Specify the .mov file or series of .png files that you want to overlay on your video. For .png files, provide the file name of the first file in the series. Make sure that the names of the .png files end with sequential numbers that specify the order that they are played in. For example, overlay_000.png, overlay_001.png, overlay_002.png, and so on. The sequence must start at zero, and each image file name must have the same number of digits. Pad your initial file names with enough zeros to complete the sequence. For example, if the first image is overlay_0.png, there can be only 10 images in the sequence, with the last image being overlay_9.png. But if the first image is overlay_00.png, there can be 100 images in the sequence.
   */
  Input?: string;

  /**
   * Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files.
   */
  InsertionMode?: MotionImageInsertionMode | string;

  /**
   * Use Offset to specify the placement of your motion graphic overlay on the video frame. Specify in pixels, from the upper-left corner of the frame. If you don't specify an offset, the service scales your overlay to the full size of the frame. Otherwise, the service inserts the overlay at its native resolution and scales the size up or down with any video scaling.
   */
  Offset?: MotionImageInsertionOffset;

  /**
   * Specify whether your motion graphic overlay repeats on a loop or plays only once.
   */
  Playback?: MotionImagePlayback | string;

  /**
   * Specify when the motion overlay begins. Use timecode format (HH:MM:SS:FF or HH:MM:SS;FF). Make sure that the timecode you provide here takes into account how you have set up your timecode configuration under both job settings and input settings. The simplest way to do that is to set both to start at 0. If you need to set up your job to follow timecodes embedded in your source that don't start at zero, make sure that you specify a start time that is after the first embedded timecode. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-timecode.html Find job-wide and input timecode configuration settings in your JSON job settings specification at settings>timecodeConfig>source and settings>inputs>timecodeSource.
   */
  StartTime?: string;
}

/**
 * @public
 * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
 */
export interface NielsenConfiguration {
  /**
   * Nielsen has discontinued the use of breakout code functionality. If you must include this property, set the value to zero.
   */
  BreakoutCode?: number;

  /**
   * Use Distributor ID (DistributorID) to specify the distributor ID that is assigned to your organization by Neilsen.
   */
  DistributorId?: string;
}

/**
 * @public
 * @enum
 */
export const NielsenActiveWatermarkProcessType = {
  CBET: "CBET",
  NAES2_AND_NW: "NAES2_AND_NW",
  NAES2_AND_NW_AND_CBET: "NAES2_AND_NW_AND_CBET",
} as const;

/**
 * @public
 */
export type NielsenActiveWatermarkProcessType =
  (typeof NielsenActiveWatermarkProcessType)[keyof typeof NielsenActiveWatermarkProcessType];

/**
 * @public
 * @enum
 */
export const NielsenSourceWatermarkStatusType = {
  CLEAN: "CLEAN",
  WATERMARKED: "WATERMARKED",
} as const;

/**
 * @public
 */
export type NielsenSourceWatermarkStatusType =
  (typeof NielsenSourceWatermarkStatusType)[keyof typeof NielsenSourceWatermarkStatusType];

/**
 * @public
 * @enum
 */
export const NielsenUniqueTicPerAudioTrackType = {
  RESERVE_UNIQUE_TICS_PER_TRACK: "RESERVE_UNIQUE_TICS_PER_TRACK",
  SAME_TICS_PER_TRACK: "SAME_TICS_PER_TRACK",
} as const;

/**
 * @public
 */
export type NielsenUniqueTicPerAudioTrackType =
  (typeof NielsenUniqueTicPerAudioTrackType)[keyof typeof NielsenUniqueTicPerAudioTrackType];

/**
 * @public
 * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]
 */
export interface NielsenNonLinearWatermarkSettings {
  /**
   * Choose the type of Nielsen watermarks that you want in your outputs. When you choose NAES 2 and NW (NAES2_AND_NW), you must provide a value for the setting SID (sourceId). When you choose CBET (CBET), you must provide a value for the setting CSID (cbetSourceId). When you choose NAES 2, NW, and CBET (NAES2_AND_NW_AND_CBET), you must provide values for both of these settings.
   */
  ActiveWatermarkProcess?: NielsenActiveWatermarkProcessType | string;

  /**
   * Optional. Use this setting when you want the service to include an ADI file in the Nielsen metadata .zip file. To provide an ADI file, store it in Amazon S3 and provide a URL to it here. The URL should be in the following format: S3://bucket/path/ADI-file. For more information about the metadata .zip file, see the setting Metadata destination (metadataDestination).
   */
  AdiFilename?: string;

  /**
   * Use the asset ID that you provide to Nielsen to uniquely identify this asset. Required for all Nielsen non-linear watermarking.
   */
  AssetId?: string;

  /**
   * Use the asset name that you provide to Nielsen for this asset. Required for all Nielsen non-linear watermarking.
   */
  AssetName?: string;

  /**
   * Use the CSID that Nielsen provides to you. This CBET source ID should be unique to your Nielsen account but common to all of your output assets that have CBET watermarking. Required when you choose a value for the setting Watermark types (ActiveWatermarkProcess) that includes CBET.
   */
  CbetSourceId?: string;

  /**
   * Optional. If this asset uses an episode ID with Nielsen, provide it here.
   */
  EpisodeId?: string;

  /**
   * Specify the Amazon S3 location where you want MediaConvert to save your Nielsen non-linear metadata .zip file. This Amazon S3 bucket must be in the same Region as the one where you do your MediaConvert transcoding. If you want to include an ADI file in this .zip file, use the setting ADI file (adiFilename) to specify it. MediaConvert delivers the Nielsen metadata .zip files only to your metadata destination Amazon S3 bucket. It doesn't deliver the .zip files to Nielsen. You are responsible for delivering the metadata .zip files to Nielsen.
   */
  MetadataDestination?: string;

  /**
   * Use the SID that Nielsen provides to you. This source ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking. This ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking.
   */
  SourceId?: number;

  /**
   * Required. Specify whether your source content already contains Nielsen non-linear watermarks. When you set this value to Watermarked (WATERMARKED), the service fails the job. Nielsen requires that you add non-linear watermarking to only clean content that doesn't already have non-linear Nielsen watermarks.
   */
  SourceWatermarkStatus?: NielsenSourceWatermarkStatusType | string;

  /**
   * Specify the endpoint for the TIC server that you have deployed and configured in the AWS Cloud. Required for all Nielsen non-linear watermarking. MediaConvert can't connect directly to a TIC server. Instead, you must use API Gateway to provide a RESTful interface between MediaConvert and a TIC server that you deploy in your AWS account. For more information on deploying a TIC server in your AWS account and the required API Gateway, contact Nielsen support.
   */
  TicServerUrl?: string;

  /**
   * To create assets that have the same TIC values in each audio track, keep the default value Share TICs (SAME_TICS_PER_TRACK). To create assets that have unique TIC values for each audio track, choose Use unique TICs (RESERVE_UNIQUE_TICS_PER_TRACK).
   */
  UniqueTicPerAudioTrack?: NielsenUniqueTicPerAudioTrackType | string;
}

/**
 * @public
 * Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.
 */
export interface AutomatedAbrSettings {
  /**
   * Optional. The maximum target bit rate used in your automated ABR stack. Use this value to set an upper limit on the bandwidth consumed by the highest-quality rendition. This is the rendition that is delivered to viewers with the fastest internet connections. If you don't specify a value, MediaConvert uses 8,000,000 (8 mb/s) by default.
   */
  MaxAbrBitrate?: number;

  /**
   * Optional. The maximum number of renditions that MediaConvert will create in your automated ABR stack. The number of renditions is determined automatically, based on analysis of each job, but will never exceed this limit. When you set this to Auto in the console, which is equivalent to excluding it from your JSON job specification, MediaConvert defaults to a limit of 15.
   */
  MaxRenditions?: number;

  /**
   * Optional. The minimum target bitrate used in your automated ABR stack. Use this value to set a lower limit on the bitrate of video delivered to viewers with slow internet connections. If you don't specify a value, MediaConvert uses 600,000 (600 kb/s) by default.
   */
  MinAbrBitrate?: number;

  /**
   * Optional. Use Automated ABR rules to specify restrictions for the rendition sizes MediaConvert will create in your ABR stack. You can use these rules if your ABR workflow has specific rendition size requirements, but you still want MediaConvert to optimize for video quality and overall file size.
   */
  Rules?: AutomatedAbrRule[];
}

/**
 * @public
 * Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.
 */
export interface AutomatedEncodingSettings {
  /**
   * Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.
   */
  AbrSettings?: AutomatedAbrSettings;
}

/**
 * @public
 * @enum
 */
export const CmafClientCache = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CmafClientCache = (typeof CmafClientCache)[keyof typeof CmafClientCache];

/**
 * @public
 * @enum
 */
export const CmafCodecSpecification = {
  RFC_4281: "RFC_4281",
  RFC_6381: "RFC_6381",
} as const;

/**
 * @public
 */
export type CmafCodecSpecification = (typeof CmafCodecSpecification)[keyof typeof CmafCodecSpecification];

/**
 * @public
 * @enum
 */
export const DashManifestStyle = {
  BASIC: "BASIC",
  COMPACT: "COMPACT",
  DISTINCT: "DISTINCT",
} as const;

/**
 * @public
 */
export type DashManifestStyle = (typeof DashManifestStyle)[keyof typeof DashManifestStyle];

/**
 * @public
 * @enum
 */
export const S3ObjectCannedAcl = {
  AUTHENTICATED_READ: "AUTHENTICATED_READ",
  BUCKET_OWNER_FULL_CONTROL: "BUCKET_OWNER_FULL_CONTROL",
  BUCKET_OWNER_READ: "BUCKET_OWNER_READ",
  PUBLIC_READ: "PUBLIC_READ",
} as const;

/**
 * @public
 */
export type S3ObjectCannedAcl = (typeof S3ObjectCannedAcl)[keyof typeof S3ObjectCannedAcl];

/**
 * @public
 * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
 */
export interface S3DestinationAccessControl {
  /**
   * Choose an Amazon S3 canned ACL for MediaConvert to apply to this output.
   */
  CannedAcl?: S3ObjectCannedAcl | string;
}

/**
 * @public
 * @enum
 */
export const S3ServerSideEncryptionType = {
  SERVER_SIDE_ENCRYPTION_KMS: "SERVER_SIDE_ENCRYPTION_KMS",
  SERVER_SIDE_ENCRYPTION_S3: "SERVER_SIDE_ENCRYPTION_S3",
} as const;

/**
 * @public
 */
export type S3ServerSideEncryptionType = (typeof S3ServerSideEncryptionType)[keyof typeof S3ServerSideEncryptionType];

/**
 * @public
 * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
 */
export interface S3EncryptionSettings {
  /**
   * Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3 (SERVER_SIDE_ENCRYPTION_S3). If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting KMS ARN (kmsKeyArn).
   */
  EncryptionType?: S3ServerSideEncryptionType | string;

  /**
   * Optionally, specify the encryption context that you want to use alongside your KMS key. AWS KMS uses this encryption context as additional authenticated data (AAD) to support authenticated encryption. This value must be a base64-encoded UTF-8 string holding JSON which represents a string-string map. To use this setting, you must also set Server-side encryption (S3ServerSideEncryptionType) to AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). For more information about encryption context, see: https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context.
   */
  KmsEncryptionContext?: string;

  /**
   * Optionally, specify the customer master key (CMK) that you want to use to encrypt the data key that AWS uses to encrypt your output content. Enter the Amazon Resource Name (ARN) of the CMK. To use this setting, you must also set Server-side encryption (S3ServerSideEncryptionType) to AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). If you set Server-side encryption to AWS KMS but don't specify a CMK here, AWS uses the AWS managed CMK associated with Amazon S3.
   */
  KmsKeyArn?: string;
}

/**
 * @public
 * Settings associated with S3 destination
 */
export interface S3DestinationSettings {
  /**
   * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
   */
  AccessControl?: S3DestinationAccessControl;

  /**
   * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
   */
  Encryption?: S3EncryptionSettings;
}

/**
 * @public
 * Settings associated with the destination. Will vary based on the type of destination
 */
export interface DestinationSettings {
  /**
   * Settings associated with S3 destination
   */
  S3Settings?: S3DestinationSettings;
}

/**
 * @public
 * @enum
 */
export const CmafEncryptionType = {
  AES_CTR: "AES_CTR",
  SAMPLE_AES: "SAMPLE_AES",
} as const;

/**
 * @public
 */
export type CmafEncryptionType = (typeof CmafEncryptionType)[keyof typeof CmafEncryptionType];

/**
 * @public
 * @enum
 */
export const CmafInitializationVectorInManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type CmafInitializationVectorInManifest =
  (typeof CmafInitializationVectorInManifest)[keyof typeof CmafInitializationVectorInManifest];

/**
 * @public
 * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
 */
export interface SpekeKeyProviderCmaf {
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   */
  CertificateArn?: string;

  /**
   * Specify the DRM system IDs that you want signaled in the DASH manifest that MediaConvert creates as part of this CMAF package. The DASH manifest can currently signal up to three system IDs. For more information, see https://dashif.org/identifiers/content_protection/.
   */
  DashSignaledSystemIds?: string[];

  /**
   * Specify the DRM system ID that you want signaled in the HLS manifest that MediaConvert creates as part of this CMAF package. The HLS manifest can currently signal only one system ID. For more information, see https://dashif.org/identifiers/content_protection/.
   */
  HlsSignaledSystemIds?: string[];

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   */
  ResourceId?: string;

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   */
  Url?: string;
}

/**
 * @public
 * Use these settings to set up encryption with a static key provider.
 */
export interface StaticKeyProvider {
  /**
   * Relates to DRM implementation. Sets the value of the KEYFORMAT attribute. Must be 'identity' or a reverse DNS string. May be omitted to indicate an implicit value of 'identity'.
   */
  KeyFormat?: string;

  /**
   * Relates to DRM implementation. Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   */
  KeyFormatVersions?: string;

  /**
   * Relates to DRM implementation. Use a 32-character hexidecimal string to specify Key Value (StaticKeyValue).
   */
  StaticKeyValue?: string;

  /**
   * Relates to DRM implementation. The location of the license server used for protecting content.
   */
  Url?: string;
}

/**
 * @public
 * @enum
 */
export const CmafKeyProviderType = {
  SPEKE: "SPEKE",
  STATIC_KEY: "STATIC_KEY",
} as const;

/**
 * @public
 */
export type CmafKeyProviderType = (typeof CmafKeyProviderType)[keyof typeof CmafKeyProviderType];

/**
 * @public
 * Settings for CMAF encryption
 */
export interface CmafEncryptionSettings {
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   */
  ConstantInitializationVector?: string;

  /**
   * Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample (SAMPLE-AES) or AES_CTR (AES-CTR).
   */
  EncryptionMethod?: CmafEncryptionType | string;

  /**
   * When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests.
   */
  InitializationVectorInManifest?: CmafInitializationVectorInManifest | string;

  /**
   * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProviderCmaf;

  /**
   * Use these settings to set up encryption with a static key provider.
   */
  StaticKeyProvider?: StaticKeyProvider;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   */
  Type?: CmafKeyProviderType | string;
}

/**
 * @public
 * @enum
 */
export const CmafImageBasedTrickPlay = {
  ADVANCED: "ADVANCED",
  NONE: "NONE",
  THUMBNAIL: "THUMBNAIL",
  THUMBNAIL_AND_FULLFRAME: "THUMBNAIL_AND_FULLFRAME",
} as const;

/**
 * @public
 */
export type CmafImageBasedTrickPlay = (typeof CmafImageBasedTrickPlay)[keyof typeof CmafImageBasedTrickPlay];

/**
 * @public
 * @enum
 */
export const CmafIntervalCadence = {
  FOLLOW_CUSTOM: "FOLLOW_CUSTOM",
  FOLLOW_IFRAME: "FOLLOW_IFRAME",
} as const;

/**
 * @public
 */
export type CmafIntervalCadence = (typeof CmafIntervalCadence)[keyof typeof CmafIntervalCadence];

/**
 * @public
 * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
 */
export interface CmafImageBasedTrickPlaySettings {
  /**
   * The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.
   */
  IntervalCadence?: CmafIntervalCadence | string;

  /**
   * Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.
   */
  ThumbnailHeight?: number;

  /**
   * Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.
   */
  ThumbnailInterval?: number;

  /**
   * Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.
   */
  ThumbnailWidth?: number;

  /**
   * Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.
   */
  TileHeight?: number;

  /**
   * Number of thumbnails in each row of a tile image. Set a value between 1 and 512.
   */
  TileWidth?: number;
}

/**
 * @public
 * @enum
 */
export const CmafManifestCompression = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type CmafManifestCompression = (typeof CmafManifestCompression)[keyof typeof CmafManifestCompression];

/**
 * @public
 * @enum
 */
export const CmafManifestDurationFormat = {
  FLOATING_POINT: "FLOATING_POINT",
  INTEGER: "INTEGER",
} as const;

/**
 * @public
 */
export type CmafManifestDurationFormat = (typeof CmafManifestDurationFormat)[keyof typeof CmafManifestDurationFormat];

/**
 * @public
 * @enum
 */
export const CmafMpdManifestBandwidthType = {
  AVERAGE: "AVERAGE",
  MAX: "MAX",
} as const;

/**
 * @public
 */
export type CmafMpdManifestBandwidthType =
  (typeof CmafMpdManifestBandwidthType)[keyof typeof CmafMpdManifestBandwidthType];

/**
 * @public
 * @enum
 */
export const CmafMpdProfile = {
  MAIN_PROFILE: "MAIN_PROFILE",
  ON_DEMAND_PROFILE: "ON_DEMAND_PROFILE",
} as const;

/**
 * @public
 */
export type CmafMpdProfile = (typeof CmafMpdProfile)[keyof typeof CmafMpdProfile];

/**
 * @public
 * @enum
 */
export const CmafPtsOffsetHandlingForBFrames = {
  MATCH_INITIAL_PTS: "MATCH_INITIAL_PTS",
  ZERO_BASED: "ZERO_BASED",
} as const;

/**
 * @public
 */
export type CmafPtsOffsetHandlingForBFrames =
  (typeof CmafPtsOffsetHandlingForBFrames)[keyof typeof CmafPtsOffsetHandlingForBFrames];

/**
 * @public
 * @enum
 */
export const CmafSegmentControl = {
  SEGMENTED_FILES: "SEGMENTED_FILES",
  SINGLE_FILE: "SINGLE_FILE",
} as const;

/**
 * @public
 */
export type CmafSegmentControl = (typeof CmafSegmentControl)[keyof typeof CmafSegmentControl];

/**
 * @public
 * @enum
 */
export const CmafSegmentLengthControl = {
  EXACT: "EXACT",
  GOP_MULTIPLE: "GOP_MULTIPLE",
} as const;

/**
 * @public
 */
export type CmafSegmentLengthControl = (typeof CmafSegmentLengthControl)[keyof typeof CmafSegmentLengthControl];

/**
 * @public
 * @enum
 */
export const CmafStreamInfResolution = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type CmafStreamInfResolution = (typeof CmafStreamInfResolution)[keyof typeof CmafStreamInfResolution];

/**
 * @public
 * @enum
 */
export const CmafTargetDurationCompatibilityMode = {
  LEGACY: "LEGACY",
  SPEC_COMPLIANT: "SPEC_COMPLIANT",
} as const;

/**
 * @public
 */
export type CmafTargetDurationCompatibilityMode =
  (typeof CmafTargetDurationCompatibilityMode)[keyof typeof CmafTargetDurationCompatibilityMode];

/**
 * @public
 * @enum
 */
export const CmafVideoCompositionOffsets = {
  SIGNED: "SIGNED",
  UNSIGNED: "UNSIGNED",
} as const;

/**
 * @public
 */
export type CmafVideoCompositionOffsets =
  (typeof CmafVideoCompositionOffsets)[keyof typeof CmafVideoCompositionOffsets];

/**
 * @public
 * @enum
 */
export const CmafWriteDASHManifest = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CmafWriteDASHManifest = (typeof CmafWriteDASHManifest)[keyof typeof CmafWriteDASHManifest];

/**
 * @public
 * @enum
 */
export const CmafWriteHLSManifest = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CmafWriteHLSManifest = (typeof CmafWriteHLSManifest)[keyof typeof CmafWriteHLSManifest];

/**
 * @public
 * @enum
 */
export const CmafWriteSegmentTimelineInRepresentation = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CmafWriteSegmentTimelineInRepresentation =
  (typeof CmafWriteSegmentTimelineInRepresentation)[keyof typeof CmafWriteSegmentTimelineInRepresentation];

/**
 * @public
 * Settings related to your CMAF output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to CMAF_GROUP_SETTINGS.
 */
export interface CmafGroupSettings {
  /**
   * By default, the service creates one top-level .m3u8 HLS manifest and one top -level .mpd DASH manifest for each CMAF output group in your job. These default manifests reference every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here. For each additional manifest that you specify, the service creates one HLS manifest and one DASH manifest.
   */
  AdditionalManifests?: CmafAdditionalManifest[];

  /**
   * A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   */
  BaseUrl?: string;

  /**
   * Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.
   */
  ClientCache?: CmafClientCache | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: CmafCodecSpecification | string;

  /**
   * Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline in each video Representation: Keep the default value, Basic. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct.
   */
  DashManifestStyle?: DashManifestStyle | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: CmafEncryptionSettings;

  /**
   * Specify the length, in whole seconds, of the mp4 fragments. When you don't specify a value, MediaConvert defaults to 2. Related setting: Use Fragment length control (FragmentLengthControl) to specify whether the encoder enforces this value strictly.
   */
  FragmentLength?: number;

  /**
   * Specify whether MediaConvert generates images for trick play. Keep the default value, None (NONE), to not generate any images. Choose Thumbnail (THUMBNAIL) to generate tiled thumbnails. Choose Thumbnail and full frame (THUMBNAIL_AND_FULLFRAME) to generate tiled thumbnails and full-resolution images of single frames. When you enable Write HLS manifest (WriteHlsManifest), MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. When you enable Write DASH manifest (WriteDashManifest), MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md
   */
  ImageBasedTrickPlay?: CmafImageBasedTrickPlay | string;

  /**
   * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
   */
  ImageBasedTrickPlaySettings?: CmafImageBasedTrickPlaySettings;

  /**
   * When set to GZIP, compresses HLS playlist.
   */
  ManifestCompression?: CmafManifestCompression | string;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   */
  ManifestDurationFormat?: CmafManifestDurationFormat | string;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   */
  MinBufferTime?: number;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.
   */
  MpdManifestBandwidthType?: CmafMpdManifestBandwidthType | string;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).
   */
  MpdProfile?: CmafMpdProfile | string;

  /**
   * Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS (MATCH_INITIAL_PTS) when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based (ZERO_BASED) to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.
   */
  PtsOffsetHandlingForBFrames?: CmafPtsOffsetHandlingForBFrames | string;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   */
  SegmentControl?: CmafSegmentControl | string;

  /**
   * Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 10. Related settings: Use Segment length control (SegmentLengthControl) to specify whether the encoder enforces this value strictly. Use Segment control (CmafSegmentControl) to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.
   */
  SegmentLength?: number;

  /**
   * Specify how you want MediaConvert to determine the segment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Segment length (SegmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.
   */
  SegmentLengthControl?: CmafSegmentLengthControl | string;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: CmafStreamInfResolution | string;

  /**
   * When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration.
   */
  TargetDurationCompatibilityMode?: CmafTargetDurationCompatibilityMode | string;

  /**
   * Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.
   */
  VideoCompositionOffsets?: CmafVideoCompositionOffsets | string;

  /**
   * When set to ENABLED, a DASH MPD manifest will be generated for this output.
   */
  WriteDashManifest?: CmafWriteDASHManifest | string;

  /**
   * When set to ENABLED, an Apple HLS manifest will be generated for this output.
   */
  WriteHlsManifest?: CmafWriteHLSManifest | string;

  /**
   * When you enable Precise segment duration in DASH manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.
   */
  WriteSegmentTimelineInRepresentation?: CmafWriteSegmentTimelineInRepresentation | string;
}

/**
 * @public
 * @enum
 */
export const DashIsoGroupAudioChannelConfigSchemeIdUri = {
  DOLBY_CHANNEL_CONFIGURATION: "DOLBY_CHANNEL_CONFIGURATION",
  MPEG_CHANNEL_CONFIGURATION: "MPEG_CHANNEL_CONFIGURATION",
} as const;

/**
 * @public
 */
export type DashIsoGroupAudioChannelConfigSchemeIdUri =
  (typeof DashIsoGroupAudioChannelConfigSchemeIdUri)[keyof typeof DashIsoGroupAudioChannelConfigSchemeIdUri];

/**
 * @public
 * @enum
 */
export const DashIsoPlaybackDeviceCompatibility = {
  CENC_V1: "CENC_V1",
  UNENCRYPTED_SEI: "UNENCRYPTED_SEI",
} as const;

/**
 * @public
 */
export type DashIsoPlaybackDeviceCompatibility =
  (typeof DashIsoPlaybackDeviceCompatibility)[keyof typeof DashIsoPlaybackDeviceCompatibility];

/**
 * @public
 * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
 */
export interface SpekeKeyProvider {
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   */
  CertificateArn?: string;

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   */
  ResourceId?: string;

  /**
   * Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. Other group types support one system id. See
   *  https://dashif.org/identifiers/content_protection/ for more details.
   */
  SystemIds?: string[];

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   */
  Url?: string;
}

/**
 * @public
 * Specifies DRM settings for DASH outputs.
 */
export interface DashIsoEncryptionSettings {
  /**
   * This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.
   */
  PlaybackDeviceCompatibility?: DashIsoPlaybackDeviceCompatibility | string;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProvider;
}

/**
 * @public
 * @enum
 */
export const DashIsoHbbtvCompliance = {
  HBBTV_1_5: "HBBTV_1_5",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type DashIsoHbbtvCompliance = (typeof DashIsoHbbtvCompliance)[keyof typeof DashIsoHbbtvCompliance];

/**
 * @public
 * @enum
 */
export const DashIsoImageBasedTrickPlay = {
  ADVANCED: "ADVANCED",
  NONE: "NONE",
  THUMBNAIL: "THUMBNAIL",
  THUMBNAIL_AND_FULLFRAME: "THUMBNAIL_AND_FULLFRAME",
} as const;

/**
 * @public
 */
export type DashIsoImageBasedTrickPlay = (typeof DashIsoImageBasedTrickPlay)[keyof typeof DashIsoImageBasedTrickPlay];

/**
 * @public
 * @enum
 */
export const DashIsoIntervalCadence = {
  FOLLOW_CUSTOM: "FOLLOW_CUSTOM",
  FOLLOW_IFRAME: "FOLLOW_IFRAME",
} as const;

/**
 * @public
 */
export type DashIsoIntervalCadence = (typeof DashIsoIntervalCadence)[keyof typeof DashIsoIntervalCadence];

/**
 * @public
 * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
 */
export interface DashIsoImageBasedTrickPlaySettings {
  /**
   * The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.
   */
  IntervalCadence?: DashIsoIntervalCadence | string;

  /**
   * Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.
   */
  ThumbnailHeight?: number;

  /**
   * Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.
   */
  ThumbnailInterval?: number;

  /**
   * Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.
   */
  ThumbnailWidth?: number;

  /**
   * Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.
   */
  TileHeight?: number;

  /**
   * Number of thumbnails in each row of a tile image. Set a value between 1 and 512.
   */
  TileWidth?: number;
}

/**
 * @public
 * @enum
 */
export const DashIsoMpdManifestBandwidthType = {
  AVERAGE: "AVERAGE",
  MAX: "MAX",
} as const;

/**
 * @public
 */
export type DashIsoMpdManifestBandwidthType =
  (typeof DashIsoMpdManifestBandwidthType)[keyof typeof DashIsoMpdManifestBandwidthType];

/**
 * @public
 * @enum
 */
export const DashIsoMpdProfile = {
  MAIN_PROFILE: "MAIN_PROFILE",
  ON_DEMAND_PROFILE: "ON_DEMAND_PROFILE",
} as const;

/**
 * @public
 */
export type DashIsoMpdProfile = (typeof DashIsoMpdProfile)[keyof typeof DashIsoMpdProfile];

/**
 * @public
 * @enum
 */
export const DashIsoPtsOffsetHandlingForBFrames = {
  MATCH_INITIAL_PTS: "MATCH_INITIAL_PTS",
  ZERO_BASED: "ZERO_BASED",
} as const;

/**
 * @public
 */
export type DashIsoPtsOffsetHandlingForBFrames =
  (typeof DashIsoPtsOffsetHandlingForBFrames)[keyof typeof DashIsoPtsOffsetHandlingForBFrames];

/**
 * @public
 * @enum
 */
export const DashIsoSegmentControl = {
  SEGMENTED_FILES: "SEGMENTED_FILES",
  SINGLE_FILE: "SINGLE_FILE",
} as const;

/**
 * @public
 */
export type DashIsoSegmentControl = (typeof DashIsoSegmentControl)[keyof typeof DashIsoSegmentControl];

/**
 * @public
 * @enum
 */
export const DashIsoSegmentLengthControl = {
  EXACT: "EXACT",
  GOP_MULTIPLE: "GOP_MULTIPLE",
} as const;

/**
 * @public
 */
export type DashIsoSegmentLengthControl =
  (typeof DashIsoSegmentLengthControl)[keyof typeof DashIsoSegmentLengthControl];

/**
 * @public
 * @enum
 */
export const DashIsoVideoCompositionOffsets = {
  SIGNED: "SIGNED",
  UNSIGNED: "UNSIGNED",
} as const;

/**
 * @public
 */
export type DashIsoVideoCompositionOffsets =
  (typeof DashIsoVideoCompositionOffsets)[keyof typeof DashIsoVideoCompositionOffsets];

/**
 * @public
 * @enum
 */
export const DashIsoWriteSegmentTimelineInRepresentation = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DashIsoWriteSegmentTimelineInRepresentation =
  (typeof DashIsoWriteSegmentTimelineInRepresentation)[keyof typeof DashIsoWriteSegmentTimelineInRepresentation];

/**
 * @public
 * Settings related to your DASH output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to DASH_ISO_GROUP_SETTINGS.
 */
export interface DashIsoGroupSettings {
  /**
   * By default, the service creates one .mpd DASH manifest for each DASH ISO output group in your job. This default manifest references every output in the output group. To create additional DASH manifests that reference a subset of the outputs in the output group, specify a list of them here.
   */
  AdditionalManifests?: DashAdditionalManifest[];

  /**
   * Use this setting only when your audio codec is a Dolby one (AC3, EAC3, or Atmos) and your downstream workflow requires that your DASH manifest use the Dolby channel configuration tag, rather than the MPEG one. For example, you might need to use this to make dynamic ad insertion work. Specify which audio channel configuration scheme ID URI MediaConvert writes in your DASH manifest. Keep the default value, MPEG channel configuration (MPEG_CHANNEL_CONFIGURATION), to have MediaConvert write this: urn:mpeg:mpegB:cicp:ChannelConfiguration. Choose Dolby channel configuration (DOLBY_CHANNEL_CONFIGURATION) to have MediaConvert write this instead: tag:dolby.com,2014:dash:audio_channel_configuration:2011.
   */
  AudioChannelConfigSchemeIdUri?: DashIsoGroupAudioChannelConfigSchemeIdUri | string;

  /**
   * A partial URI prefix that will be put in the manifest (.mpd) file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   */
  BaseUrl?: string;

  /**
   * Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline in each video Representation: Keep the default value, Basic. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct.
   */
  DashManifestStyle?: DashManifestStyle | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: DashIsoEncryptionSettings;

  /**
   * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  FragmentLength?: number;

  /**
   * Supports HbbTV specification as indicated
   */
  HbbtvCompliance?: DashIsoHbbtvCompliance | string;

  /**
   * Specify whether MediaConvert generates images for trick play. Keep the default value, None (NONE), to not generate any images. Choose Thumbnail (THUMBNAIL) to generate tiled thumbnails. Choose Thumbnail and full frame (THUMBNAIL_AND_FULLFRAME) to generate tiled thumbnails and full-resolution images of single frames. MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md
   */
  ImageBasedTrickPlay?: DashIsoImageBasedTrickPlay | string;

  /**
   * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
   */
  ImageBasedTrickPlaySettings?: DashIsoImageBasedTrickPlaySettings;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   */
  MinBufferTime?: number;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.
   */
  MpdManifestBandwidthType?: DashIsoMpdManifestBandwidthType | string;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).
   */
  MpdProfile?: DashIsoMpdProfile | string;

  /**
   * Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS (MATCH_INITIAL_PTS) when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based (ZERO_BASED) to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.
   */
  PtsOffsetHandlingForBFrames?: DashIsoPtsOffsetHandlingForBFrames | string;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   */
  SegmentControl?: DashIsoSegmentControl | string;

  /**
   * Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 30. Related settings: Use Segment length control (SegmentLengthControl) to specify whether the encoder enforces this value strictly. Use Segment control (DashIsoSegmentControl) to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.
   */
  SegmentLength?: number;

  /**
   * Specify how you want MediaConvert to determine the segment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Segment length (SegmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.
   */
  SegmentLengthControl?: DashIsoSegmentLengthControl | string;

  /**
   * Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.
   */
  VideoCompositionOffsets?: DashIsoVideoCompositionOffsets | string;

  /**
   * If you get an HTTP error in the 400 range when you play back your DASH output, enable this setting and run your transcoding job again. When you enable this setting, the service writes precise segment durations in the DASH manifest. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When you don't enable this setting, the service writes approximate segment durations in your DASH manifest.
   */
  WriteSegmentTimelineInRepresentation?: DashIsoWriteSegmentTimelineInRepresentation | string;
}

/**
 * @public
 * Settings related to your File output group. MediaConvert uses this group of settings to generate a single standalone file, rather than a streaming package. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to FILE_GROUP_SETTINGS.
 */
export interface FileGroupSettings {
  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;
}

/**
 * @public
 * @enum
 */
export const HlsAudioOnlyHeader = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type HlsAudioOnlyHeader = (typeof HlsAudioOnlyHeader)[keyof typeof HlsAudioOnlyHeader];

/**
 * @public
 * @enum
 */
export const HlsCaptionLanguageSetting = {
  INSERT: "INSERT",
  NONE: "NONE",
  OMIT: "OMIT",
} as const;

/**
 * @public
 */
export type HlsCaptionLanguageSetting = (typeof HlsCaptionLanguageSetting)[keyof typeof HlsCaptionLanguageSetting];

/**
 * @public
 * @enum
 */
export const HlsCaptionSegmentLengthControl = {
  LARGE_SEGMENTS: "LARGE_SEGMENTS",
  MATCH_VIDEO: "MATCH_VIDEO",
} as const;

/**
 * @public
 */
export type HlsCaptionSegmentLengthControl =
  (typeof HlsCaptionSegmentLengthControl)[keyof typeof HlsCaptionSegmentLengthControl];

/**
 * @public
 * @enum
 */
export const HlsClientCache = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type HlsClientCache = (typeof HlsClientCache)[keyof typeof HlsClientCache];

/**
 * @public
 * @enum
 */
export const HlsCodecSpecification = {
  RFC_4281: "RFC_4281",
  RFC_6381: "RFC_6381",
} as const;

/**
 * @public
 */
export type HlsCodecSpecification = (typeof HlsCodecSpecification)[keyof typeof HlsCodecSpecification];

/**
 * @public
 * @enum
 */
export const HlsDirectoryStructure = {
  SINGLE_DIRECTORY: "SINGLE_DIRECTORY",
  SUBDIRECTORY_PER_STREAM: "SUBDIRECTORY_PER_STREAM",
} as const;

/**
 * @public
 */
export type HlsDirectoryStructure = (typeof HlsDirectoryStructure)[keyof typeof HlsDirectoryStructure];

/**
 * @public
 * @enum
 */
export const HlsEncryptionType = {
  AES128: "AES128",
  SAMPLE_AES: "SAMPLE_AES",
} as const;

/**
 * @public
 */
export type HlsEncryptionType = (typeof HlsEncryptionType)[keyof typeof HlsEncryptionType];

/**
 * @public
 * @enum
 */
export const HlsInitializationVectorInManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type HlsInitializationVectorInManifest =
  (typeof HlsInitializationVectorInManifest)[keyof typeof HlsInitializationVectorInManifest];

/**
 * @public
 * @enum
 */
export const HlsOfflineEncrypted = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type HlsOfflineEncrypted = (typeof HlsOfflineEncrypted)[keyof typeof HlsOfflineEncrypted];

/**
 * @public
 * @enum
 */
export const HlsKeyProviderType = {
  SPEKE: "SPEKE",
  STATIC_KEY: "STATIC_KEY",
} as const;

/**
 * @public
 */
export type HlsKeyProviderType = (typeof HlsKeyProviderType)[keyof typeof HlsKeyProviderType];

/**
 * @public
 * Settings for HLS encryption
 */
export interface HlsEncryptionSettings {
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   */
  ConstantInitializationVector?: string;

  /**
   * Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.
   */
  EncryptionMethod?: HlsEncryptionType | string;

  /**
   * The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.
   */
  InitializationVectorInManifest?: HlsInitializationVectorInManifest | string;

  /**
   * Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection.
   */
  OfflineEncrypted?: HlsOfflineEncrypted | string;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProvider;

  /**
   * Use these settings to set up encryption with a static key provider.
   */
  StaticKeyProvider?: StaticKeyProvider;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   */
  Type?: HlsKeyProviderType | string;
}

/**
 * @public
 * @enum
 */
export const HlsImageBasedTrickPlay = {
  ADVANCED: "ADVANCED",
  NONE: "NONE",
  THUMBNAIL: "THUMBNAIL",
  THUMBNAIL_AND_FULLFRAME: "THUMBNAIL_AND_FULLFRAME",
} as const;

/**
 * @public
 */
export type HlsImageBasedTrickPlay = (typeof HlsImageBasedTrickPlay)[keyof typeof HlsImageBasedTrickPlay];

/**
 * @public
 * @enum
 */
export const HlsIntervalCadence = {
  FOLLOW_CUSTOM: "FOLLOW_CUSTOM",
  FOLLOW_IFRAME: "FOLLOW_IFRAME",
} as const;

/**
 * @public
 */
export type HlsIntervalCadence = (typeof HlsIntervalCadence)[keyof typeof HlsIntervalCadence];

/**
 * @public
 * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
 */
export interface HlsImageBasedTrickPlaySettings {
  /**
   * The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.
   */
  IntervalCadence?: HlsIntervalCadence | string;

  /**
   * Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.
   */
  ThumbnailHeight?: number;

  /**
   * Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.
   */
  ThumbnailInterval?: number;

  /**
   * Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.
   */
  ThumbnailWidth?: number;

  /**
   * Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.
   */
  TileHeight?: number;

  /**
   * Number of thumbnails in each row of a tile image. Set a value between 1 and 512.
   */
  TileWidth?: number;
}

/**
 * @public
 * @enum
 */
export const HlsManifestCompression = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type HlsManifestCompression = (typeof HlsManifestCompression)[keyof typeof HlsManifestCompression];

/**
 * @public
 * @enum
 */
export const HlsManifestDurationFormat = {
  FLOATING_POINT: "FLOATING_POINT",
  INTEGER: "INTEGER",
} as const;

/**
 * @public
 */
export type HlsManifestDurationFormat = (typeof HlsManifestDurationFormat)[keyof typeof HlsManifestDurationFormat];

/**
 * @public
 * @enum
 */
export const HlsOutputSelection = {
  MANIFESTS_AND_SEGMENTS: "MANIFESTS_AND_SEGMENTS",
  SEGMENTS_ONLY: "SEGMENTS_ONLY",
} as const;

/**
 * @public
 */
export type HlsOutputSelection = (typeof HlsOutputSelection)[keyof typeof HlsOutputSelection];

/**
 * @public
 * @enum
 */
export const HlsProgramDateTime = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type HlsProgramDateTime = (typeof HlsProgramDateTime)[keyof typeof HlsProgramDateTime];

/**
 * @public
 * @enum
 */
export const HlsSegmentControl = {
  SEGMENTED_FILES: "SEGMENTED_FILES",
  SINGLE_FILE: "SINGLE_FILE",
} as const;

/**
 * @public
 */
export type HlsSegmentControl = (typeof HlsSegmentControl)[keyof typeof HlsSegmentControl];

/**
 * @public
 * @enum
 */
export const HlsSegmentLengthControl = {
  EXACT: "EXACT",
  GOP_MULTIPLE: "GOP_MULTIPLE",
} as const;

/**
 * @public
 */
export type HlsSegmentLengthControl = (typeof HlsSegmentLengthControl)[keyof typeof HlsSegmentLengthControl];

/**
 * @public
 * @enum
 */
export const HlsStreamInfResolution = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type HlsStreamInfResolution = (typeof HlsStreamInfResolution)[keyof typeof HlsStreamInfResolution];

/**
 * @public
 * @enum
 */
export const HlsTargetDurationCompatibilityMode = {
  LEGACY: "LEGACY",
  SPEC_COMPLIANT: "SPEC_COMPLIANT",
} as const;

/**
 * @public
 */
export type HlsTargetDurationCompatibilityMode =
  (typeof HlsTargetDurationCompatibilityMode)[keyof typeof HlsTargetDurationCompatibilityMode];

/**
 * @public
 * @enum
 */
export const HlsTimedMetadataId3Frame = {
  NONE: "NONE",
  PRIV: "PRIV",
  TDRL: "TDRL",
} as const;

/**
 * @public
 */
export type HlsTimedMetadataId3Frame = (typeof HlsTimedMetadataId3Frame)[keyof typeof HlsTimedMetadataId3Frame];

/**
 * @public
 * Settings related to your HLS output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to HLS_GROUP_SETTINGS.
 */
export interface HlsGroupSettings {
  /**
   * Choose one or more ad marker types to decorate your Apple HLS manifest. This setting does not determine whether SCTE-35 markers appear in the outputs themselves.
   */
  AdMarkers?: (HlsAdMarkers | string)[];

  /**
   * By default, the service creates one top-level .m3u8 HLS manifest for each HLS output group in your job. This default manifest references every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here.
   */
  AdditionalManifests?: HlsAdditionalManifest[];

  /**
   * Ignore this setting unless you are using FairPlay DRM with Verimatrix and you encounter playback issues. Keep the default value, Include (INCLUDE), to output audio-only headers. Choose Exclude (EXCLUDE) to remove the audio-only headers from your audio segments.
   */
  AudioOnlyHeader?: HlsAudioOnlyHeader | string;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrl?: string;

  /**
   * Language to be used on Caption outputs
   */
  CaptionLanguageMappings?: HlsCaptionLanguageMapping[];

  /**
   * Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting | string;

  /**
   * Set Caption segment length control (CaptionSegmentLengthControl) to Match video (MATCH_VIDEO) to create caption segments that align with the video segments from the first video output in this output group. For example, if the video segments are 2 seconds long, your WebVTT segments will also be 2 seconds long. Keep the default setting, Large segments (LARGE_SEGMENTS) to create caption segments that are 300 seconds long.
   */
  CaptionSegmentLengthControl?: HlsCaptionSegmentLengthControl | string;

  /**
   * Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.
   */
  ClientCache?: HlsClientCache | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: HlsCodecSpecification | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * Indicates whether segments should be placed in subdirectories.
   */
  DirectoryStructure?: HlsDirectoryStructure | string;

  /**
   * DRM settings.
   */
  Encryption?: HlsEncryptionSettings;

  /**
   * Specify whether MediaConvert generates images for trick play. Keep the default value, None (NONE), to not generate any images. Choose Thumbnail (THUMBNAIL) to generate tiled thumbnails. Choose Thumbnail and full frame (THUMBNAIL_AND_FULLFRAME) to generate tiled thumbnails and full-resolution images of single frames. MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md
   */
  ImageBasedTrickPlay?: HlsImageBasedTrickPlay | string;

  /**
   * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
   */
  ImageBasedTrickPlaySettings?: HlsImageBasedTrickPlaySettings;

  /**
   * When set to GZIP, compresses HLS playlist.
   */
  ManifestCompression?: HlsManifestCompression | string;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   */
  ManifestDurationFormat?: HlsManifestDurationFormat | string;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * When set, Minimum Segment Size is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   */
  MinSegmentLength?: number;

  /**
   * Indicates whether the .m3u8 manifest file should be generated for this HLS output group.
   */
  OutputSelection?: HlsOutputSelection | string;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.
   */
  ProgramDateTime?: HlsProgramDateTime | string;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   */
  ProgramDateTimePeriod?: number;

  /**
   * When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.
   */
  SegmentControl?: HlsSegmentControl | string;

  /**
   * Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 10. Related settings: Use Segment length control (SegmentLengthControl) to specify whether the encoder enforces this value strictly. Use Segment control (HlsSegmentControl) to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.
   */
  SegmentLength?: number;

  /**
   * Specify how you want MediaConvert to determine the segment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Segment length (SegmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.
   */
  SegmentLengthControl?: HlsSegmentLengthControl | string;

  /**
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be SINGLE_DIRECTORY for this setting to have an effect.
   */
  SegmentsPerSubdirectory?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: HlsStreamInfResolution | string;

  /**
   * When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration.
   */
  TargetDurationCompatibilityMode?: HlsTargetDurationCompatibilityMode | string;

  /**
   * Specify the type of the ID3 frame (timedMetadataId3Frame) to use for ID3 timestamps (timedMetadataId3Period) in your output. To include ID3 timestamps: Specify PRIV (PRIV) or TDRL (TDRL) and set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH). To exclude ID3 timestamps: Set ID3 timestamp frame type to None (NONE).
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame | string;

  /**
   * Specify the interval in seconds to write ID3 timestamps in your output. The first timestamp starts at the output timecode and date, and increases incrementally with each ID3 timestamp. To use the default interval of 10 seconds: Leave blank. To include this metadata in your output: Set ID3 timestamp frame type (timedMetadataId3Frame) to PRIV (PRIV) or TDRL (TDRL), and set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).
   */
  TimedMetadataId3Period?: number;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   */
  TimestampDeltaMilliseconds?: number;
}

/**
 * @public
 * Specify the details for each additional Microsoft Smooth Streaming manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 */
export interface MsSmoothAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your Microsoft Smooth group is film-name.ismv. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.ismv.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

/**
 * @public
 * @enum
 */
export const MsSmoothAudioDeduplication = {
  COMBINE_DUPLICATE_STREAMS: "COMBINE_DUPLICATE_STREAMS",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type MsSmoothAudioDeduplication = (typeof MsSmoothAudioDeduplication)[keyof typeof MsSmoothAudioDeduplication];

/**
 * @public
 * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
 */
export interface MsSmoothEncryptionSettings {
  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProvider;
}

/**
 * @public
 * @enum
 */
export const MsSmoothFragmentLengthControl = {
  EXACT: "EXACT",
  GOP_MULTIPLE: "GOP_MULTIPLE",
} as const;

/**
 * @public
 */
export type MsSmoothFragmentLengthControl =
  (typeof MsSmoothFragmentLengthControl)[keyof typeof MsSmoothFragmentLengthControl];

/**
 * @public
 * @enum
 */
export const MsSmoothManifestEncoding = {
  UTF16: "UTF16",
  UTF8: "UTF8",
} as const;

/**
 * @public
 */
export type MsSmoothManifestEncoding = (typeof MsSmoothManifestEncoding)[keyof typeof MsSmoothManifestEncoding];

/**
 * @public
 * Settings related to your Microsoft Smooth Streaming output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to MS_SMOOTH_GROUP_SETTINGS.
 */
export interface MsSmoothGroupSettings {
  /**
   * By default, the service creates one .ism Microsoft Smooth Streaming manifest for each Microsoft Smooth Streaming output group in your job. This default manifest references every output in the output group. To create additional manifests that reference a subset of the outputs in the output group, specify a list of them here.
   */
  AdditionalManifests?: MsSmoothAdditionalManifest[];

  /**
   * COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.
   */
  AudioDeduplication?: MsSmoothAudioDeduplication | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
   */
  Encryption?: MsSmoothEncryptionSettings;

  /**
   * Specify how you want MediaConvert to determine the fragment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Fragment length (FragmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.
   */
  FragmentLength?: number;

  /**
   * Specify how you want MediaConvert to determine the fragment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Fragment length (FragmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.
   */
  FragmentLengthControl?: MsSmoothFragmentLengthControl | string;

  /**
   * Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.
   */
  ManifestEncoding?: MsSmoothManifestEncoding | string;
}

/**
 * @public
 * @enum
 */
export const OutputGroupType = {
  CMAF_GROUP_SETTINGS: "CMAF_GROUP_SETTINGS",
  DASH_ISO_GROUP_SETTINGS: "DASH_ISO_GROUP_SETTINGS",
  FILE_GROUP_SETTINGS: "FILE_GROUP_SETTINGS",
  HLS_GROUP_SETTINGS: "HLS_GROUP_SETTINGS",
  MS_SMOOTH_GROUP_SETTINGS: "MS_SMOOTH_GROUP_SETTINGS",
} as const;

/**
 * @public
 */
export type OutputGroupType = (typeof OutputGroupType)[keyof typeof OutputGroupType];

/**
 * @public
 * Output Group settings, including type
 */
export interface OutputGroupSettings {
  /**
   * Settings related to your CMAF output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to CMAF_GROUP_SETTINGS.
   */
  CmafGroupSettings?: CmafGroupSettings;

  /**
   * Settings related to your DASH output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to DASH_ISO_GROUP_SETTINGS.
   */
  DashIsoGroupSettings?: DashIsoGroupSettings;

  /**
   * Settings related to your File output group. MediaConvert uses this group of settings to generate a single standalone file, rather than a streaming package. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to FILE_GROUP_SETTINGS.
   */
  FileGroupSettings?: FileGroupSettings;

  /**
   * Settings related to your HLS output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to HLS_GROUP_SETTINGS.
   */
  HlsGroupSettings?: HlsGroupSettings;

  /**
   * Settings related to your Microsoft Smooth Streaming output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to MS_SMOOTH_GROUP_SETTINGS.
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)
   */
  Type?: OutputGroupType | string;
}

/**
 * @public
 * @enum
 */
export const CmfcAudioDuration = {
  DEFAULT_CODEC_DURATION: "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION: "MATCH_VIDEO_DURATION",
} as const;

/**
 * @public
 */
export type CmfcAudioDuration = (typeof CmfcAudioDuration)[keyof typeof CmfcAudioDuration];

/**
 * @public
 * @enum
 */
export const CmfcAudioTrackType = {
  ALTERNATE_AUDIO_AUTO_SELECT: "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT: "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
} as const;

/**
 * @public
 */
export type CmfcAudioTrackType = (typeof CmfcAudioTrackType)[keyof typeof CmfcAudioTrackType];

/**
 * @public
 * @enum
 */
export const CmfcDescriptiveVideoServiceFlag = {
  DONT_FLAG: "DONT_FLAG",
  FLAG: "FLAG",
} as const;

/**
 * @public
 */
export type CmfcDescriptiveVideoServiceFlag =
  (typeof CmfcDescriptiveVideoServiceFlag)[keyof typeof CmfcDescriptiveVideoServiceFlag];

/**
 * @public
 * @enum
 */
export const CmfcIFrameOnlyManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type CmfcIFrameOnlyManifest = (typeof CmfcIFrameOnlyManifest)[keyof typeof CmfcIFrameOnlyManifest];

/**
 * @public
 * @enum
 */
export const CmfcKlvMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type CmfcKlvMetadata = (typeof CmfcKlvMetadata)[keyof typeof CmfcKlvMetadata];

/**
 * @public
 * @enum
 */
export const CmfcManifestMetadataSignaling = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CmfcManifestMetadataSignaling =
  (typeof CmfcManifestMetadataSignaling)[keyof typeof CmfcManifestMetadataSignaling];

/**
 * @public
 * @enum
 */
export const CmfcScte35Esam = {
  INSERT: "INSERT",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type CmfcScte35Esam = (typeof CmfcScte35Esam)[keyof typeof CmfcScte35Esam];

/**
 * @public
 * @enum
 */
export const CmfcScte35Source = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type CmfcScte35Source = (typeof CmfcScte35Source)[keyof typeof CmfcScte35Source];

/**
 * @public
 * @enum
 */
export const CmfcTimedMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type CmfcTimedMetadata = (typeof CmfcTimedMetadata)[keyof typeof CmfcTimedMetadata];

/**
 * @public
 * @enum
 */
export const CmfcTimedMetadataBoxVersion = {
  VERSION_0: "VERSION_0",
  VERSION_1: "VERSION_1",
} as const;

/**
 * @public
 */
export type CmfcTimedMetadataBoxVersion =
  (typeof CmfcTimedMetadataBoxVersion)[keyof typeof CmfcTimedMetadataBoxVersion];

/**
 * @public
 * These settings relate to the fragmented MP4 container for the segments in your CMAF outputs.
 */
export interface CmfcSettings {
  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: CmfcAudioDuration | string;

  /**
   * Specify the audio rendition group for this audio rendition. Specify up to one value for each audio output in your output group. This value appears in your HLS parent manifest in the EXT-X-MEDIA tag of TYPE=AUDIO, as the value for the GROUP-ID attribute. For example, if you specify "audio_aac_1" for Audio group ID, it appears in your manifest like this: #EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio_aac_1". Related setting: To associate the rendition group that this audio track belongs to with a video rendition, include the same value that you provide here for that video output's setting Audio rendition sets (audioRenditionSets).
   */
  AudioGroupId?: string;

  /**
   * List the audio rendition groups that you want included with this video rendition. Use a comma-separated list. For example, say you want to include the audio rendition groups that have the audio group IDs "audio_aac_1" and "audio_dolby". Then you would specify this value: "audio_aac_1,audio_dolby". Related setting: The rendition groups that you include in your comma-separated list should all match values that you specify in the setting Audio group ID (AudioGroupId) for audio renditions in the same output group as this video rendition. Default behavior: If you don't specify anything here and for Audio group ID, MediaConvert puts each audio variant in its own audio rendition group and associates it with every video variant. Each value in your list appears in your HLS parent manifest in the EXT-X-STREAM-INF tag as the value for the AUDIO attribute. To continue the previous example, say that the file name for the child manifest for your video rendition is "amazing_video_1.m3u8". Then, in your parent manifest, each value will appear on separate lines, like this: #EXT-X-STREAM-INF:AUDIO="audio_aac_1"... amazing_video_1.m3u8 #EXT-X-STREAM-INF:AUDIO="audio_dolby"... amazing_video_1.m3u8
   */
  AudioRenditionSets?: string;

  /**
   * Use this setting to control the values that MediaConvert puts in your HLS parent playlist to control how the client player selects which audio track to play. The other options for this setting determine the values that MediaConvert writes for the DEFAULT and AUTOSELECT attributes of the EXT-X-MEDIA entry for the audio variant. For more information about these attributes, see the Apple documentation article https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/adding_alternate_media_to_a_playlist. Choose Alternate audio, auto select, default (ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT) to set DEFAULT=YES and AUTOSELECT=YES. Choose this value for only one variant in your output group. Choose Alternate audio, auto select, not default (ALTERNATE_AUDIO_AUTO_SELECT) to set DEFAULT=NO and AUTOSELECT=YES. Choose Alternate Audio, Not Auto Select to set DEFAULT=NO and AUTOSELECT=NO. When you don't specify a value for this setting, MediaConvert defaults to Alternate audio, auto select, default. When there is more than one variant in your output group, you must explicitly choose a value for this setting.
   */
  AudioTrackType?: CmfcAudioTrackType | string;

  /**
   * Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag (FLAG), MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don't flag (DONT_FLAG), MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation.
   */
  DescriptiveVideoServiceFlag?: CmfcDescriptiveVideoServiceFlag | string;

  /**
   * Choose Include (INCLUDE) to have MediaConvert generate an HLS child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude (EXCLUDE).
   */
  IFrameOnlyManifest?: CmfcIFrameOnlyManifest | string;

  /**
   * To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.
   */
  KlvMetadata?: CmfcKlvMetadata | string;

  /**
   * To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata (TimedMetadata) to Passthrough.
   */
  ManifestMetadataSignaling?: CmfcManifestMetadataSignaling | string;

  /**
   * Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
   */
  Scte35Esam?: CmfcScte35Esam | string;

  /**
   * Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.
   */
  Scte35Source?: CmfcScte35Source | string;

  /**
   * To include ID3 metadata in this output: Set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH). Specify this ID3 metadata in Custom ID3 metadata inserter (timedMetadataInsertion). MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None (NONE) or leave blank.
   */
  TimedMetadata?: CmfcTimedMetadata | string;

  /**
   * Specify the event message box (eMSG) version for ID3 timed metadata in your output.
   * For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.
   * Leave blank to use the default value Version 0.
   * When you specify Version 1, you must also set ID3 metadata (timedMetadata) to Passthrough.
   */
  TimedMetadataBoxVersion?: CmfcTimedMetadataBoxVersion | string;

  /**
   * Specify the event message box (eMSG) scheme ID URI (scheme_id_uri) for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. Leave blank to use the default value: https://aomedia.org/emsg/ID3 When you specify a value for ID3 metadata scheme ID URI, you must also set ID3 metadata (timedMetadata) to Passthrough.
   */
  TimedMetadataSchemeIdUri?: string;

  /**
   * Specify the event message box (eMSG) value for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. When you specify a value for ID3 Metadata Value, you must also set ID3 metadata (timedMetadata) to Passthrough.
   */
  TimedMetadataValue?: string;
}

/**
 * @public
 * @enum
 */
export const ContainerType = {
  CMFC: "CMFC",
  F4V: "F4V",
  ISMV: "ISMV",
  M2TS: "M2TS",
  M3U8: "M3U8",
  MOV: "MOV",
  MP4: "MP4",
  MPD: "MPD",
  MXF: "MXF",
  RAW: "RAW",
  WEBM: "WEBM",
} as const;

/**
 * @public
 */
export type ContainerType = (typeof ContainerType)[keyof typeof ContainerType];

/**
 * @public
 * @enum
 */
export const F4vMoovPlacement = {
  NORMAL: "NORMAL",
  PROGRESSIVE_DOWNLOAD: "PROGRESSIVE_DOWNLOAD",
} as const;

/**
 * @public
 */
export type F4vMoovPlacement = (typeof F4vMoovPlacement)[keyof typeof F4vMoovPlacement];

/**
 * @public
 * Settings for F4v container
 */
export interface F4vSettings {
  /**
   * If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.
   */
  MoovPlacement?: F4vMoovPlacement | string;
}
