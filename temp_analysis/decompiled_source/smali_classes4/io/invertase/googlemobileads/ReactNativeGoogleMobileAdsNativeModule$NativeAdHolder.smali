.class final Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;
.super Ljava/lang/Object;
.source "ReactNativeGoogleMobileAdsNativeModule.kt"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x12
    name = "NativeAdHolder"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0008\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0005\u0008\u0082\u0004\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u00a2\u0006\u0004\u0008\u0006\u0010\u0007J\u000e\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0014J\u0006\u0010\u0015\u001a\u00020\u0012J\u001c\u0010\u0016\u001a\u00020\u00122\u0006\u0010\u0017\u001a\u00020\u00032\n\u0008\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u0005H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\"\u0010\n\u001a\u0004\u0018\u00010\t2\u0008\u0010\u0008\u001a\u0004\u0018\u00010\t@BX\u0086\u000e\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u000b\u0010\u000cR\u000e\u0010\r\u001a\u00020\u000eX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0010X\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0019"
    }
    d2 = {
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;",
        "",
        "adUnitId",
        "",
        "requestOptions",
        "Lcom/facebook/react/bridge/ReadableMap;",
        "<init>",
        "(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;)V",
        "value",
        "Lcom/google/android/gms/ads/nativead/NativeAd;",
        "nativeAd",
        "getNativeAd",
        "()Lcom/google/android/gms/ads/nativead/NativeAd;",
        "adListener",
        "Lcom/google/android/gms/ads/AdListener;",
        "videoLifecycleCallbacks",
        "Lcom/google/android/gms/ads/VideoController$VideoLifecycleCallbacks;",
        "loadAd",
        "",
        "loadedListener",
        "Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;",
        "destroy",
        "emitAdEvent",
        "type",
        "eventData",
        "react-native-google-mobile-ads_release"
    }
    k = 0x1
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# instance fields
.field private final adListener:Lcom/google/android/gms/ads/AdListener;

.field private final adUnitId:Ljava/lang/String;

.field private nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

.field private final requestOptions:Lcom/facebook/react/bridge/ReadableMap;

.field final synthetic this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

.field private final videoLifecycleCallbacks:Lcom/google/android/gms/ads/VideoController$VideoLifecycleCallbacks;


# direct methods
.method public static synthetic $r8$lambda$Uu7Ga34aNO8abRj3A1pyEGJWFpU(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;Lcom/google/android/gms/ads/nativead/NativeAd;)V
    .locals 0

    invoke-static {p0, p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->loadAd$lambda$1(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;Lcom/google/android/gms/ads/nativead/NativeAd;)V

    return-void
.end method

.method public static synthetic $r8$lambda$pJMD1H2Zct-jVKx-ZVP3bVG9J9Y(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/google/android/gms/ads/AdValue;)V
    .locals 0

    invoke-static {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->loadAd$lambda$1$lambda$0(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/google/android/gms/ads/AdValue;)V

    return-void
.end method

.method public constructor <init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Lcom/facebook/react/bridge/ReadableMap;",
            ")V"
        }
    .end annotation

    const-string v0, "adUnitId"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "requestOptions"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 100
    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p2, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->adUnitId:Ljava/lang/String;

    iput-object p3, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->requestOptions:Lcom/facebook/react/bridge/ReadableMap;

    .line 104
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$adListener$1;

    invoke-direct {p1, p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$adListener$1;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;)V

    check-cast p1, Lcom/google/android/gms/ads/AdListener;

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->adListener:Lcom/google/android/gms/ads/AdListener;

    .line 122
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$videoLifecycleCallbacks$1;

    invoke-direct {p1, p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$videoLifecycleCallbacks$1;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;)V

    check-cast p1, Lcom/google/android/gms/ads/VideoController$VideoLifecycleCallbacks;

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->videoLifecycleCallbacks:Lcom/google/android/gms/ads/VideoController$VideoLifecycleCallbacks;

    return-void
.end method

.method private final emitAdEvent(Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;)V
    .locals 3

    .line 207
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

    if-nez v0, :cond_0

    return-void

    .line 208
    :cond_0
    invoke-static {}, Lcom/facebook/react/bridge/Arguments;->createMap()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v1

    const-string v2, "createMap(...)"

    invoke-static {v1, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    if-eqz p2, :cond_1

    .line 210
    invoke-interface {v1, p2}, Lcom/facebook/react/bridge/WritableMap;->merge(Lcom/facebook/react/bridge/ReadableMap;)V

    .line 212
    :cond_1
    invoke-virtual {v0}, Lcom/google/android/gms/ads/nativead/NativeAd;->getResponseInfo()Lcom/google/android/gms/ads/ResponseInfo;

    move-result-object p2

    if-eqz p2, :cond_2

    invoke-virtual {p2}, Lcom/google/android/gms/ads/ResponseInfo;->getResponseId()Ljava/lang/String;

    move-result-object p2

    goto :goto_0

    :cond_2
    const/4 p2, 0x0

    :goto_0
    const-string v0, "responseId"

    invoke-interface {v1, v0, p2}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 213
    const-string p2, "type"

    invoke-interface {v1, p2, p1}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 214
    iget-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    check-cast v1, Lcom/facebook/react/bridge/ReadableMap;

    invoke-virtual {p1, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->emitOnAdEvent(Lcom/facebook/react/bridge/ReadableMap;)V

    return-void
.end method

.method static synthetic emitAdEvent$default(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;ILjava/lang/Object;)V
    .locals 0

    and-int/lit8 p3, p3, 0x2

    if-eqz p3, :cond_0

    const/4 p2, 0x0

    .line 206
    :cond_0
    invoke-direct {p0, p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent(Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;)V

    return-void
.end method

.method private static final loadAd$lambda$1(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;Lcom/google/android/gms/ads/nativead/NativeAd;)V
    .locals 2

    const-string v0, "nativeAd"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 185
    iput-object p2, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

    .line 186
    invoke-virtual {p2}, Lcom/google/android/gms/ads/nativead/NativeAd;->getMediaContent()Lcom/google/android/gms/ads/MediaContent;

    move-result-object v0

    if-eqz v0, :cond_0

    invoke-interface {v0}, Lcom/google/android/gms/ads/MediaContent;->getVideoController()Lcom/google/android/gms/ads/VideoController;

    move-result-object v0

    if-eqz v0, :cond_0

    iget-object v1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->videoLifecycleCallbacks:Lcom/google/android/gms/ads/VideoController$VideoLifecycleCallbacks;

    invoke-virtual {v0, v1}, Lcom/google/android/gms/ads/VideoController;->setVideoLifecycleCallbacks(Lcom/google/android/gms/ads/VideoController$VideoLifecycleCallbacks;)V

    .line 187
    :cond_0
    new-instance v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$$ExternalSyntheticLambda1;

    invoke-direct {v0, p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$$ExternalSyntheticLambda1;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;)V

    invoke-virtual {p2, v0}, Lcom/google/android/gms/ads/nativead/NativeAd;->setOnPaidEventListener(Lcom/google/android/gms/ads/OnPaidEventListener;)V

    .line 194
    invoke-interface {p1, p2}, Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;->onNativeAdLoaded(Lcom/google/android/gms/ads/nativead/NativeAd;)V

    return-void
.end method

.method private static final loadAd$lambda$1$lambda$0(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/google/android/gms/ads/AdValue;)V
    .locals 5

    const-string v0, "adValue"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 188
    invoke-static {}, Lcom/facebook/react/bridge/Arguments;->createMap()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v0

    const-string v1, "createMap(...)"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 189
    invoke-virtual {p1}, Lcom/google/android/gms/ads/AdValue;->getValueMicros()J

    move-result-wide v1

    long-to-double v1, v1

    const-wide v3, 0x3eb0c6f7a0b5ed8dL    # 1.0E-6

    mul-double/2addr v1, v3

    const-string v3, "value"

    invoke-interface {v0, v3, v1, v2}, Lcom/facebook/react/bridge/WritableMap;->putDouble(Ljava/lang/String;D)V

    .line 190
    const-string v1, "precision"

    invoke-virtual {p1}, Lcom/google/android/gms/ads/AdValue;->getPrecisionType()I

    move-result v2

    invoke-interface {v0, v1, v2}, Lcom/facebook/react/bridge/WritableMap;->putInt(Ljava/lang/String;I)V

    .line 191
    const-string v1, "currency"

    invoke-virtual {p1}, Lcom/google/android/gms/ads/AdValue;->getCurrencyCode()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v0, v1, p1}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 192
    const-string p1, "paid"

    check-cast v0, Lcom/facebook/react/bridge/ReadableMap;

    invoke-direct {p0, p1, v0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent(Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;)V

    return-void
.end method


# virtual methods
.method public final destroy()V
    .locals 1

    .line 202
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Lcom/google/android/gms/ads/nativead/NativeAd;->destroy()V

    :cond_0
    const/4 v0, 0x0

    .line 203
    iput-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

    return-void
.end method

.method public final getNativeAd()Lcom/google/android/gms/ads/nativead/NativeAd;
    .locals 1

    .line 101
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->nativeAd:Lcom/google/android/gms/ads/nativead/NativeAd;

    return-object v0
.end method

.method public final loadAd(Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;)V
    .locals 7

    const-string v0, "loadedListener"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 145
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->requestOptions:Lcom/facebook/react/bridge/ReadableMap;

    const-string v1, "aspectRatio"

    invoke-interface {v0, v1}, Lcom/facebook/react/bridge/ReadableMap;->hasKey(Ljava/lang/String;)Z

    move-result v0

    const/4 v2, 0x0

    const/4 v3, 0x3

    const/4 v4, 0x2

    const/4 v5, 0x1

    if-eqz v0, :cond_2

    .line 146
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->requestOptions:Lcom/facebook/react/bridge/ReadableMap;

    invoke-interface {v0, v1}, Lcom/facebook/react/bridge/ReadableMap;->getInt(Ljava/lang/String;)I

    move-result v0

    if-eq v0, v5, :cond_2

    if-eq v0, v4, :cond_1

    if-eq v0, v3, :cond_0

    const/4 v1, 0x4

    if-eq v0, v1, :cond_3

    move v1, v2

    goto :goto_0

    :cond_0
    move v1, v3

    goto :goto_0

    :cond_1
    move v1, v4

    goto :goto_0

    :cond_2
    move v1, v5

    .line 156
    :cond_3
    :goto_0
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->requestOptions:Lcom/facebook/react/bridge/ReadableMap;

    const-string v6, "adChoicesPlacement"

    invoke-interface {v0, v6}, Lcom/facebook/react/bridge/ReadableMap;->hasKey(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_6

    .line 157
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->requestOptions:Lcom/facebook/react/bridge/ReadableMap;

    invoke-interface {v0, v6}, Lcom/facebook/react/bridge/ReadableMap;->getInt(Ljava/lang/String;)I

    move-result v0

    if-eqz v0, :cond_7

    if-eq v0, v5, :cond_6

    if-eq v0, v4, :cond_5

    if-eq v0, v3, :cond_4

    goto :goto_1

    :cond_4
    move v2, v3

    goto :goto_2

    :cond_5
    move v2, v4

    goto :goto_2

    :cond_6
    :goto_1
    move v2, v5

    .line 167
    :cond_7
    :goto_2
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->requestOptions:Lcom/facebook/react/bridge/ReadableMap;

    const-string v3, "startVideoMuted"

    invoke-interface {v0, v3}, Lcom/facebook/react/bridge/ReadableMap;->hasKey(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_8

    .line 168
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->requestOptions:Lcom/facebook/react/bridge/ReadableMap;

    invoke-interface {v0, v3}, Lcom/facebook/react/bridge/ReadableMap;->getBoolean(Ljava/lang/String;)Z

    move-result v5

    .line 172
    :cond_8
    new-instance v0, Lcom/google/android/gms/ads/VideoOptions$Builder;

    invoke-direct {v0}, Lcom/google/android/gms/ads/VideoOptions$Builder;-><init>()V

    .line 173
    invoke-virtual {v0, v5}, Lcom/google/android/gms/ads/VideoOptions$Builder;->setStartMuted(Z)Lcom/google/android/gms/ads/VideoOptions$Builder;

    move-result-object v0

    .line 174
    invoke-virtual {v0}, Lcom/google/android/gms/ads/VideoOptions$Builder;->build()Lcom/google/android/gms/ads/VideoOptions;

    move-result-object v0

    const-string v3, "build(...)"

    invoke-static {v0, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 175
    new-instance v4, Lcom/google/android/gms/ads/nativead/NativeAdOptions$Builder;

    invoke-direct {v4}, Lcom/google/android/gms/ads/nativead/NativeAdOptions$Builder;-><init>()V

    .line 177
    invoke-virtual {v4, v1}, Lcom/google/android/gms/ads/nativead/NativeAdOptions$Builder;->setMediaAspectRatio(I)Lcom/google/android/gms/ads/nativead/NativeAdOptions$Builder;

    move-result-object v1

    .line 178
    invoke-virtual {v1, v2}, Lcom/google/android/gms/ads/nativead/NativeAdOptions$Builder;->setAdChoicesPlacement(I)Lcom/google/android/gms/ads/nativead/NativeAdOptions$Builder;

    move-result-object v1

    .line 179
    invoke-virtual {v1, v0}, Lcom/google/android/gms/ads/nativead/NativeAdOptions$Builder;->setVideoOptions(Lcom/google/android/gms/ads/VideoOptions;)Lcom/google/android/gms/ads/nativead/NativeAdOptions$Builder;

    move-result-object v0

    .line 180
    invoke-virtual {v0}, Lcom/google/android/gms/ads/nativead/NativeAdOptions$Builder;->build()Lcom/google/android/gms/ads/nativead/NativeAdOptions;

    move-result-object v0

    invoke-static {v0, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 181
    new-instance v1, Lcom/google/android/gms/ads/AdLoader$Builder;

    iget-object v2, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    invoke-static {v2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->access$getReactApplicationContext(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;)Lcom/facebook/react/bridge/ReactApplicationContext;

    move-result-object v2

    check-cast v2, Landroid/content/Context;

    iget-object v4, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->adUnitId:Ljava/lang/String;

    invoke-direct {v1, v2, v4}, Lcom/google/android/gms/ads/AdLoader$Builder;-><init>(Landroid/content/Context;Ljava/lang/String;)V

    .line 182
    invoke-virtual {v1, v0}, Lcom/google/android/gms/ads/AdLoader$Builder;->withNativeAdOptions(Lcom/google/android/gms/ads/nativead/NativeAdOptions;)Lcom/google/android/gms/ads/AdLoader$Builder;

    move-result-object v0

    .line 183
    iget-object v1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->adListener:Lcom/google/android/gms/ads/AdListener;

    invoke-virtual {v0, v1}, Lcom/google/android/gms/ads/AdLoader$Builder;->withAdListener(Lcom/google/android/gms/ads/AdListener;)Lcom/google/android/gms/ads/AdLoader$Builder;

    move-result-object v0

    .line 184
    new-instance v1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$$ExternalSyntheticLambda0;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;)V

    invoke-virtual {v0, v1}, Lcom/google/android/gms/ads/AdLoader$Builder;->forNativeAd(Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;)Lcom/google/android/gms/ads/AdLoader$Builder;

    move-result-object p1

    .line 196
    invoke-virtual {p1}, Lcom/google/android/gms/ads/AdLoader$Builder;->build()Lcom/google/android/gms/ads/AdLoader;

    move-result-object p1

    invoke-static {p1, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 197
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->requestOptions:Lcom/facebook/react/bridge/ReadableMap;

    invoke-static {v0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsCommon;->buildAdRequest(Lcom/facebook/react/bridge/ReadableMap;)Lcom/google/android/gms/ads/admanager/AdManagerAdRequest;

    move-result-object v0

    .line 198
    invoke-virtual {p1, v0}, Lcom/google/android/gms/ads/AdLoader;->loadAd(Lcom/google/android/gms/ads/admanager/AdManagerAdRequest;)V

    return-void
.end method
