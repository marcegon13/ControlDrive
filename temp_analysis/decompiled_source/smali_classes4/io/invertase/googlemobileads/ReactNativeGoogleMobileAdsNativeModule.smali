.class public final Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;
.super Lio/invertase/googlemobileads/NativeGoogleMobileAdsNativeModuleSpec;
.source "ReactNativeGoogleMobileAdsNativeModule.kt"


# annotations
.annotation runtime Lcom/facebook/react/module/annotations/ReactModule;
    name = "RNGoogleMobileAdsNativeModule"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$Companion;,
        Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nReactNativeGoogleMobileAdsNativeModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactNativeGoogleMobileAdsNativeModule.kt\nio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,222:1\n1869#2,2:223\n*S KotlinDebug\n*F\n+ 1 ReactNativeGoogleMobileAdsNativeModule.kt\nio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule\n*L\n90#1:223,2\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0004\n\u0002\u0018\u0002\n\u0002\u0008\u0003\u0008\u0007\u0018\u0000 \u00192\u00020\u0001:\u0002\u0018\u0019B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0004\u0008\u0004\u0010\u0005J\u0008\u0010\u000b\u001a\u00020\u0008H\u0016J \u0010\u000c\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u00082\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0017J\u0010\u0010\u0013\u001a\u00020\r2\u0006\u0010\u0014\u001a\u00020\u0008H\u0017J\u0008\u0010\u0015\u001a\u00020\rH\u0016J\u0010\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0006\u0010\u0014\u001a\u00020\u0008R2\u0010\u0006\u001a&\u0012\u0004\u0012\u00020\u0008\u0012\u0008\u0012\u00060\tR\u00020\u00000\u0007j\u0012\u0012\u0004\u0012\u00020\u0008\u0012\u0008\u0012\u00060\tR\u00020\u0000`\nX\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u001a"
    }
    d2 = {
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;",
        "Lio/invertase/googlemobileads/NativeGoogleMobileAdsNativeModuleSpec;",
        "reactContext",
        "Lcom/facebook/react/bridge/ReactApplicationContext;",
        "<init>",
        "(Lcom/facebook/react/bridge/ReactApplicationContext;)V",
        "adHolders",
        "Ljava/util/HashMap;",
        "",
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;",
        "Lkotlin/collections/HashMap;",
        "getName",
        "load",
        "",
        "adUnitId",
        "requestOptions",
        "Lcom/facebook/react/bridge/ReadableMap;",
        "promise",
        "Lcom/facebook/react/bridge/Promise;",
        "destroy",
        "responseId",
        "invalidate",
        "getNativeAd",
        "Lcom/google/android/gms/ads/nativead/NativeAd;",
        "NativeAdHolder",
        "Companion",
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


# static fields
.field public static final Companion:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$Companion;

.field public static final NAME:Ljava/lang/String; = "RNGoogleMobileAdsNativeModule"


# instance fields
.field private final adHolders:Ljava/util/HashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method public static synthetic $r8$lambda$5wi7lBRhskeqGz_UqPSRE-RVDHU(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/facebook/react/bridge/Promise;Lcom/google/android/gms/ads/nativead/NativeAd;)V
    .locals 0

    invoke-static {p0, p1, p2, p3}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->load$lambda$5(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/facebook/react/bridge/Promise;Lcom/google/android/gms/ads/nativead/NativeAd;)V

    return-void
.end method

.method static constructor <clinit>()V
    .locals 2

    new-instance v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$Companion;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$Companion;-><init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V

    sput-object v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->Companion:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$Companion;

    return-void
.end method

.method public constructor <init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V
    .locals 1

    const-string v0, "reactContext"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 37
    invoke-direct {p0, p1}, Lio/invertase/googlemobileads/NativeGoogleMobileAdsNativeModuleSpec;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V

    .line 38
    new-instance p1, Ljava/util/HashMap;

    invoke-direct {p1}, Ljava/util/HashMap;-><init>()V

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->adHolders:Ljava/util/HashMap;

    return-void
.end method

.method public static final synthetic access$getReactApplicationContext(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;)Lcom/facebook/react/bridge/ReactApplicationContext;
    .locals 0

    .line 34
    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->getReactApplicationContext()Lcom/facebook/react/bridge/ReactApplicationContext;

    move-result-object p0

    return-object p0
.end method

.method private static final load$lambda$5(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/facebook/react/bridge/Promise;Lcom/google/android/gms/ads/nativead/NativeAd;)V
    .locals 6

    const-string v0, "nativeAd"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 46
    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getResponseInfo()Lcom/google/android/gms/ads/ResponseInfo;

    move-result-object v0

    if-eqz v0, :cond_4

    invoke-virtual {v0}, Lcom/google/android/gms/ads/ResponseInfo;->getResponseId()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    goto/16 :goto_2

    .line 47
    :cond_0
    iget-object p0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->adHolders:Ljava/util/HashMap;

    check-cast p0, Ljava/util/Map;

    invoke-interface {p0, v0, p1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 49
    invoke-static {}, Lcom/facebook/react/bridge/Arguments;->createMap()Lcom/facebook/react/bridge/WritableMap;

    move-result-object p0

    const-string p1, "createMap(...)"

    invoke-static {p0, p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 50
    const-string v1, "responseId"

    invoke-interface {p0, v1, v0}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 51
    const-string v0, "advertiser"

    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getAdvertiser()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p0, v0, v1}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 52
    const-string v0, "body"

    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getBody()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p0, v0, v1}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 53
    const-string v0, "callToAction"

    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getCallToAction()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p0, v0, v1}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 54
    const-string v0, "headline"

    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getHeadline()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p0, v0, v1}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 55
    const-string v0, "price"

    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getPrice()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p0, v0, v1}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 56
    const-string v0, "store"

    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getStore()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p0, v0, v1}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 57
    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getStarRating()Ljava/lang/Double;

    move-result-object v0

    const-string v1, "starRating"

    if-eqz v0, :cond_1

    check-cast v0, Ljava/lang/Number;

    invoke-virtual {v0}, Ljava/lang/Number;->doubleValue()D

    move-result-wide v2

    .line 58
    invoke-interface {p0, v1, v2, v3}, Lcom/facebook/react/bridge/WritableMap;->putDouble(Ljava/lang/String;D)V

    goto :goto_0

    .line 60
    :cond_1
    invoke-interface {p0, v1}, Lcom/facebook/react/bridge/WritableMap;->putNull(Ljava/lang/String;)V

    .line 62
    :goto_0
    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getIcon()Lcom/google/android/gms/ads/nativead/NativeAd$Image;

    move-result-object v0

    const-string v1, "icon"

    if-eqz v0, :cond_2

    .line 63
    invoke-static {}, Lcom/facebook/react/bridge/Arguments;->createMap()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v2

    invoke-static {v2, p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 64
    const-string v3, "scale"

    invoke-virtual {v0}, Lcom/google/android/gms/ads/nativead/NativeAd$Image;->getScale()D

    move-result-wide v4

    invoke-interface {v2, v3, v4, v5}, Lcom/facebook/react/bridge/WritableMap;->putDouble(Ljava/lang/String;D)V

    .line 65
    invoke-virtual {v0}, Lcom/google/android/gms/ads/nativead/NativeAd$Image;->getUri()Landroid/net/Uri;

    move-result-object v0

    invoke-static {v0}, Ljava/lang/String;->valueOf(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    const-string v3, "url"

    invoke-interface {v2, v3, v0}, Lcom/facebook/react/bridge/WritableMap;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 66
    check-cast v2, Lcom/facebook/react/bridge/ReadableMap;

    invoke-interface {p0, v1, v2}, Lcom/facebook/react/bridge/WritableMap;->putMap(Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;)V

    goto :goto_1

    .line 68
    :cond_2
    invoke-interface {p0, v1}, Lcom/facebook/react/bridge/WritableMap;->putNull(Ljava/lang/String;)V

    .line 70
    :goto_1
    invoke-static {}, Lcom/facebook/react/bridge/Arguments;->createMap()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v0

    invoke-static {v0, p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 71
    invoke-virtual {p3}, Lcom/google/android/gms/ads/nativead/NativeAd;->getMediaContent()Lcom/google/android/gms/ads/MediaContent;

    move-result-object p1

    if-eqz p1, :cond_3

    .line 72
    invoke-interface {p1}, Lcom/google/android/gms/ads/MediaContent;->getAspectRatio()F

    move-result p3

    float-to-double v1, p3

    const-string p3, "aspectRatio"

    invoke-interface {v0, p3, v1, v2}, Lcom/facebook/react/bridge/WritableMap;->putDouble(Ljava/lang/String;D)V

    .line 73
    const-string p3, "hasVideoContent"

    invoke-interface {p1}, Lcom/google/android/gms/ads/MediaContent;->hasVideoContent()Z

    move-result v1

    invoke-interface {v0, p3, v1}, Lcom/facebook/react/bridge/WritableMap;->putBoolean(Ljava/lang/String;Z)V

    .line 74
    invoke-interface {p1}, Lcom/google/android/gms/ads/MediaContent;->getDuration()F

    move-result p1

    float-to-double v1, p1

    const-string p1, "duration"

    invoke-interface {v0, p1, v1, v2}, Lcom/facebook/react/bridge/WritableMap;->putDouble(Ljava/lang/String;D)V

    .line 75
    const-string p1, "mediaContent"

    check-cast v0, Lcom/facebook/react/bridge/ReadableMap;

    invoke-interface {p0, p1, v0}, Lcom/facebook/react/bridge/WritableMap;->putMap(Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;)V

    .line 78
    :cond_3
    invoke-interface {p2, p0}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    :cond_4
    :goto_2
    return-void
.end method


# virtual methods
.method public destroy(Ljava/lang/String;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    const-string v0, "responseId"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 84
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->adHolders:Ljava/util/HashMap;

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->destroy()V

    .line 85
    :cond_0
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->adHolders:Ljava/util/HashMap;

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method

.method public getName()Ljava/lang/String;
    .locals 1

    .line 40
    const-string v0, "RNGoogleMobileAdsNativeModule"

    return-object v0
.end method

.method public final getNativeAd(Ljava/lang/String;)Lcom/google/android/gms/ads/nativead/NativeAd;
    .locals 1

    const-string v0, "responseId"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 97
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->adHolders:Ljava/util/HashMap;

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    if-eqz p1, :cond_0

    invoke-virtual {p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->getNativeAd()Lcom/google/android/gms/ads/nativead/NativeAd;

    move-result-object p1

    return-object p1

    :cond_0
    const/4 p1, 0x0

    return-object p1
.end method

.method public invalidate()V
    .locals 2

    .line 89
    invoke-super {p0}, Lio/invertase/googlemobileads/NativeGoogleMobileAdsNativeModuleSpec;->invalidate()V

    .line 90
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->adHolders:Ljava/util/HashMap;

    invoke-virtual {v0}, Ljava/util/HashMap;->values()Ljava/util/Collection;

    move-result-object v0

    const-string v1, "<get-values>(...)"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Ljava/lang/Iterable;

    .line 223
    invoke-interface {v0}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    .line 91
    invoke-virtual {v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->destroy()V

    goto :goto_0

    .line 93
    :cond_0
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->adHolders:Ljava/util/HashMap;

    invoke-virtual {v0}, Ljava/util/HashMap;->clear()V

    return-void
.end method

.method public load(Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;Lcom/facebook/react/bridge/Promise;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    const-string v0, "adUnitId"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "requestOptions"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "promise"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 44
    new-instance v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    invoke-direct {v0, p0, p1, p2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;)V

    .line 45
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$$ExternalSyntheticLambda0;

    invoke-direct {p1, p0, v0, p3}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$$ExternalSyntheticLambda0;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/facebook/react/bridge/Promise;)V

    invoke-virtual {v0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->loadAd(Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;)V

    return-void
.end method
