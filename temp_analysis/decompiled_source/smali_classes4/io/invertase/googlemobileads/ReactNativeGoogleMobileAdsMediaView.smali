.class public final Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;
.super Lcom/google/android/gms/ads/nativead/MediaView;
.source "ReactNativeGoogleMobileAdsMediaView.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\u0008\u0004\n\u0002\u0018\u0002\n\u0000\u0008\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0004\u0008\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u00072\u0008\u0010\u0008\u001a\u0004\u0018\u00010\tJ\u0010\u0010\n\u001a\u00020\u00072\u0008\u0010\u000b\u001a\u0004\u0018\u00010\tJ\u0008\u0010\u000c\u001a\u00020\u0007H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u000eX\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u000f"
    }
    d2 = {
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;",
        "Lcom/google/android/gms/ads/nativead/MediaView;",
        "context",
        "Lcom/facebook/react/bridge/ReactContext;",
        "<init>",
        "(Lcom/facebook/react/bridge/ReactContext;)V",
        "setResponseId",
        "",
        "responseId",
        "",
        "setResizeMode",
        "resizeMode",
        "requestLayout",
        "measureAndLayout",
        "Ljava/lang/Runnable;",
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
.field private final context:Lcom/facebook/react/bridge/ReactContext;

.field private final measureAndLayout:Ljava/lang/Runnable;


# direct methods
.method public static synthetic $r8$lambda$lFDcIi2uQdm72pV4lfp00Hd_i-s(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;)V
    .locals 0

    invoke-static {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->measureAndLayout$lambda$1(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;)V

    return-void
.end method

.method public constructor <init>(Lcom/facebook/react/bridge/ReactContext;)V
    .locals 1

    const-string v0, "context"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 28
    move-object v0, p1

    check-cast v0, Landroid/content/Context;

    invoke-direct {p0, v0}, Lcom/google/android/gms/ads/nativead/MediaView;-><init>(Landroid/content/Context;)V

    .line 27
    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->context:Lcom/facebook/react/bridge/ReactContext;

    .line 50
    new-instance p1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView$$ExternalSyntheticLambda0;

    invoke-direct {p1, p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView$$ExternalSyntheticLambda0;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;)V

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->measureAndLayout:Ljava/lang/Runnable;

    return-void
.end method

.method private static final measureAndLayout$lambda$1(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;)V
    .locals 4

    .line 52
    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->getWidth()I

    move-result v0

    const/high16 v1, 0x40000000    # 2.0f

    invoke-static {v0, v1}, Landroid/view/View$MeasureSpec;->makeMeasureSpec(II)I

    move-result v0

    .line 53
    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->getHeight()I

    move-result v2

    invoke-static {v2, v1}, Landroid/view/View$MeasureSpec;->makeMeasureSpec(II)I

    move-result v1

    .line 51
    invoke-virtual {p0, v0, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->measure(II)V

    .line 55
    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->getLeft()I

    move-result v0

    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->getTop()I

    move-result v1

    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->getRight()I

    move-result v2

    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->getBottom()I

    move-result v3

    invoke-virtual {p0, v0, v1, v2, v3}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->layout(IIII)V

    return-void
.end method


# virtual methods
.method public requestLayout()V
    .locals 1

    .line 46
    invoke-super {p0}, Lcom/google/android/gms/ads/nativead/MediaView;->requestLayout()V

    .line 47
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->measureAndLayout:Ljava/lang/Runnable;

    invoke-virtual {p0, v0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->post(Ljava/lang/Runnable;)Z

    return-void
.end method

.method public final setResizeMode(Ljava/lang/String;)V
    .locals 2

    if-eqz p1, :cond_6

    .line 38
    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    move-result v0

    const v1, -0x702b18fb

    if-eq v0, v1, :cond_4

    const v1, 0x5a753b7

    if-eq v0, v1, :cond_2

    const v1, 0x38b724d4

    if-eq v0, v1, :cond_0

    goto :goto_0

    :cond_0
    const-string v0, "contain"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_1

    goto :goto_0

    .line 40
    :cond_1
    sget-object p1, Landroid/widget/ImageView$ScaleType;->CENTER_INSIDE:Landroid/widget/ImageView$ScaleType;

    invoke-virtual {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->setImageScaleType(Landroid/widget/ImageView$ScaleType;)V

    return-void

    .line 38
    :cond_2
    const-string v0, "cover"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_3

    goto :goto_0

    .line 39
    :cond_3
    sget-object p1, Landroid/widget/ImageView$ScaleType;->CENTER_CROP:Landroid/widget/ImageView$ScaleType;

    invoke-virtual {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->setImageScaleType(Landroid/widget/ImageView$ScaleType;)V

    return-void

    .line 38
    :cond_4
    const-string v0, "stretch"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_5

    goto :goto_0

    .line 41
    :cond_5
    sget-object p1, Landroid/widget/ImageView$ScaleType;->FIT_XY:Landroid/widget/ImageView$ScaleType;

    invoke-virtual {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->setImageScaleType(Landroid/widget/ImageView$ScaleType;)V

    :cond_6
    :goto_0
    return-void
.end method

.method public final setResponseId(Ljava/lang/String;)V
    .locals 2

    .line 30
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->context:Lcom/facebook/react/bridge/ReactContext;

    const-class v1, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    invoke-virtual {v0, v1}, Lcom/facebook/react/bridge/ReactContext;->getNativeModule(Ljava/lang/Class;)Lcom/facebook/react/bridge/NativeModule;

    move-result-object v0

    check-cast v0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    if-eqz v0, :cond_1

    if-nez p1, :cond_0

    .line 31
    const-string p1, ""

    :cond_0
    invoke-virtual {v0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->getNativeAd(Ljava/lang/String;)Lcom/google/android/gms/ads/nativead/NativeAd;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 32
    invoke-virtual {p1}, Lcom/google/android/gms/ads/nativead/NativeAd;->getMediaContent()Lcom/google/android/gms/ads/MediaContent;

    move-result-object p1

    invoke-virtual {p0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->setMediaContent(Lcom/google/android/gms/ads/MediaContent;)V

    .line 33
    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsMediaView;->requestLayout()V

    :cond_1
    return-void
.end method
