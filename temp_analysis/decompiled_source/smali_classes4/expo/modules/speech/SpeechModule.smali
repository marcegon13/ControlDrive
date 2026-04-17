.class public final Lexpo/modules/speech/SpeechModule;
.super Lexpo/modules/kotlin/modules/Module;
.source "SpeechModule.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lexpo/modules/speech/SpeechModule$Utterance;
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nSpeechModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SpeechModule.kt\nexpo/modules/speech/SpeechModule\n+ 2 Module.kt\nexpo/modules/kotlin/modules/ModuleKt\n+ 3 ExpoTrace.kt\nexpo/modules/kotlin/tracing/ExpoTraceKt\n+ 4 Trace.kt\nandroidx/tracing/TraceKt\n+ 5 ObjectDefinitionBuilder.kt\nexpo/modules/kotlin/objects/ObjectDefinitionBuilder\n+ 6 ConstantComponentBuilder.kt\nexpo/modules/kotlin/objects/ConstantComponentBuilder\n+ 7 ModuleDefinitionBuilder.kt\nexpo/modules/kotlin/modules/InternalModuleDefinitionBuilder\n+ 8 UntypedAsyncFunctionComponent.kt\nexpo/modules/kotlin/functions/UntypedAsyncFunctionComponentKt\n+ 9 EnforceType.kt\nexpo/modules/kotlin/types/EnforceTypeKt\n+ 10 AnyType.kt\nexpo/modules/kotlin/types/AnyTypeKt\n+ 11 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 12 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,200:1\n62#2:201\n14#3:202\n25#3:203\n27#4,3:204\n31#4:403\n571#5,2:207\n573#5,2:212\n235#5:216\n236#5,2:243\n245#5,8:245\n253#5,2:297\n235#5:299\n236#5,2:326\n286#5:328\n289#5,3:400\n11#6,3:209\n152#7,2:214\n13#8,6:217\n19#8,19:224\n13#8,6:271\n19#8,19:278\n13#8,6:300\n19#8,19:307\n13#8,6:374\n19#8,19:381\n11#9:223\n11#9:277\n11#9:306\n11#9:380\n172#10,7:253\n169#10:260\n145#10,2:261\n159#10,8:263\n194#10,9:329\n169#10:338\n145#10,2:339\n159#10,8:341\n203#10:349\n169#10:350\n145#10,2:351\n159#10,8:353\n204#10:361\n169#10:362\n145#10,2:363\n159#10,8:365\n201#10:373\n1563#11:404\n1634#11,3:405\n295#11,2:409\n1#12:408\n*S KotlinDebug\n*F\n+ 1 SpeechModule.kt\nexpo/modules/speech/SpeechModule\n*L\n24#1:201\n24#1:202\n24#1:203\n24#1:204,3\n24#1:403\n35#1:207,2\n35#1:212,2\n43#1:216\n43#1:243,2\n47#1:245,8\n47#1:297,2\n58#1:299\n58#1:326,2\n62#1:328\n62#1:400,3\n35#1:209,3\n39#1:214,2\n43#1:217,6\n43#1:224,19\n47#1:271,6\n47#1:278,19\n58#1:300,6\n58#1:307,19\n62#1:374,6\n62#1:381,19\n43#1:223\n47#1:277\n58#1:306\n62#1:380\n47#1:253,7\n47#1:260\n47#1:261,2\n47#1:263,8\n62#1:329,9\n62#1:338\n62#1:339,2\n62#1:341,8\n62#1:349\n62#1:350\n62#1:351,2\n62#1:353,8\n62#1:361\n62#1:362\n62#1:363,2\n62#1:365,8\n62#1:373\n86#1:404\n86#1:405,3\n122#1:409,2\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0005\n\u0002\u0018\u0002\n\u0002\u0008\u0004\u0018\u00002\u00020\u0001:\u0001\"B\u0007\u00a2\u0006\u0004\u0008\u0002\u0010\u0003J\u0008\u0010\t\u001a\u00020\nH\u0016J\u000e\u0010\u000b\u001a\u0008\u0012\u0004\u0012\u00020\r0\u000cH\u0002J \u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u0013\u001a\u00020\u0014H\u0002J\u0010\u0010\u001e\u001a\u00020\u001f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0002R\u0014\u0010\u0004\u001a\u0008\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0014\u0010\u0007\u001a\u0008\u0012\u0004\u0012\u00020\u00080\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0014\u0010\u0015\u001a\u00020\u00168BX\u0082\u0004\u00a2\u0006\u0006\u001a\u0004\u0008\u0015\u0010\u0017R\u001b\u0010\u0018\u001a\u00020\u00198BX\u0082\u0084\u0002\u00a2\u0006\u000c\n\u0004\u0008\u001c\u0010\u001d\u001a\u0004\u0008\u001a\u0010\u001bR\u0010\u0010 \u001a\u0004\u0018\u00010\u0019X\u0082\u000e\u00a2\u0006\u0002\n\u0000R\u000e\u0010!\u001a\u00020\u0016X\u0082\u000e\u00a2\u0006\u0002\n\u0000\u00a8\u0006#"
    }
    d2 = {
        "Lexpo/modules/speech/SpeechModule;",
        "Lexpo/modules/kotlin/modules/Module;",
        "<init>",
        "()V",
        "delayedUtterances",
        "Ljava/util/Queue;",
        "Lexpo/modules/speech/SpeechModule$Utterance;",
        "delayedGetVoices",
        "Lexpo/modules/kotlin/Promise;",
        "definition",
        "Lexpo/modules/kotlin/modules/ModuleDefinitionData;",
        "getVoices",
        "",
        "Lexpo/modules/speech/VoiceRecord;",
        "speakOut",
        "",
        "id",
        "",
        "text",
        "options",
        "Lexpo/modules/speech/SpeechOptions;",
        "isTextToSpeechReady",
        "",
        "()Z",
        "textToSpeech",
        "Landroid/speech/tts/TextToSpeech;",
        "getTextToSpeech",
        "()Landroid/speech/tts/TextToSpeech;",
        "textToSpeech$delegate",
        "Lkotlin/Lazy;",
        "idToMap",
        "Landroid/os/Bundle;",
        "_textToSpeech",
        "_ttsReady",
        "Utterance",
        "expo-speech_release"
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
.field private _textToSpeech:Landroid/speech/tts/TextToSpeech;

.field private _ttsReady:Z

.field private final delayedGetVoices:Ljava/util/Queue;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Queue<",
            "Lexpo/modules/kotlin/Promise;",
            ">;"
        }
    .end annotation
.end field

.field private final delayedUtterances:Ljava/util/Queue;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Queue<",
            "Lexpo/modules/speech/SpeechModule$Utterance;",
            ">;"
        }
    .end annotation
.end field

.field private final textToSpeech$delegate:Lkotlin/Lazy;


# direct methods
.method public static synthetic $r8$lambda$PFEU6wRHEJLdhnoULY_yfxPBsFg(Lexpo/modules/speech/SpeechModule;)Landroid/speech/tts/TextToSpeech;
    .locals 0

    invoke-static {p0}, Lexpo/modules/speech/SpeechModule;->textToSpeech_delegate$lambda$15(Lexpo/modules/speech/SpeechModule;)Landroid/speech/tts/TextToSpeech;

    move-result-object p0

    return-object p0
.end method

.method public static synthetic $r8$lambda$ykPWnEe_EnW1QvKOrXCh6Lmvti8(Lexpo/modules/speech/SpeechModule;I)V
    .locals 0

    invoke-static {p0, p1}, Lexpo/modules/speech/SpeechModule;->textToSpeech_delegate$lambda$15$lambda$14(Lexpo/modules/speech/SpeechModule;I)V

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 20
    invoke-direct {p0}, Lexpo/modules/kotlin/modules/Module;-><init>()V

    .line 21
    new-instance v0, Ljava/util/ArrayDeque;

    invoke-direct {v0}, Ljava/util/ArrayDeque;-><init>()V

    check-cast v0, Ljava/util/Queue;

    iput-object v0, p0, Lexpo/modules/speech/SpeechModule;->delayedUtterances:Ljava/util/Queue;

    .line 22
    new-instance v0, Ljava/util/ArrayDeque;

    invoke-direct {v0}, Ljava/util/ArrayDeque;-><init>()V

    check-cast v0, Ljava/util/Queue;

    iput-object v0, p0, Lexpo/modules/speech/SpeechModule;->delayedGetVoices:Ljava/util/Queue;

    .line 139
    new-instance v0, Lexpo/modules/speech/SpeechModule$$ExternalSyntheticLambda0;

    invoke-direct {v0, p0}, Lexpo/modules/speech/SpeechModule$$ExternalSyntheticLambda0;-><init>(Lexpo/modules/speech/SpeechModule;)V

    invoke-static {v0}, Lkotlin/LazyKt;->lazy(Lkotlin/jvm/functions/Function0;)Lkotlin/Lazy;

    move-result-object v0

    iput-object v0, p0, Lexpo/modules/speech/SpeechModule;->textToSpeech$delegate:Lkotlin/Lazy;

    return-void
.end method

.method public static final synthetic access$getDelayedGetVoices$p(Lexpo/modules/speech/SpeechModule;)Ljava/util/Queue;
    .locals 0

    .line 20
    iget-object p0, p0, Lexpo/modules/speech/SpeechModule;->delayedGetVoices:Ljava/util/Queue;

    return-object p0
.end method

.method public static final synthetic access$getDelayedUtterances$p(Lexpo/modules/speech/SpeechModule;)Ljava/util/Queue;
    .locals 0

    .line 20
    iget-object p0, p0, Lexpo/modules/speech/SpeechModule;->delayedUtterances:Ljava/util/Queue;

    return-object p0
.end method

.method public static final synthetic access$getTextToSpeech(Lexpo/modules/speech/SpeechModule;)Landroid/speech/tts/TextToSpeech;
    .locals 0

    .line 20
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getTextToSpeech()Landroid/speech/tts/TextToSpeech;

    move-result-object p0

    return-object p0
.end method

.method public static final synthetic access$getVoices(Lexpo/modules/speech/SpeechModule;)Ljava/util/List;
    .locals 0

    .line 20
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getVoices()Ljava/util/List;

    move-result-object p0

    return-object p0
.end method

.method public static final synthetic access$idToMap(Lexpo/modules/speech/SpeechModule;Ljava/lang/String;)Landroid/os/Bundle;
    .locals 0

    .line 20
    invoke-direct {p0, p1}, Lexpo/modules/speech/SpeechModule;->idToMap(Ljava/lang/String;)Landroid/os/Bundle;

    move-result-object p0

    return-object p0
.end method

.method public static final synthetic access$isTextToSpeechReady(Lexpo/modules/speech/SpeechModule;)Z
    .locals 0

    .line 20
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->isTextToSpeechReady()Z

    move-result p0

    return p0
.end method

.method public static final synthetic access$speakOut(Lexpo/modules/speech/SpeechModule;Ljava/lang/String;Ljava/lang/String;Lexpo/modules/speech/SpeechOptions;)V
    .locals 0

    .line 20
    invoke-direct {p0, p1, p2, p3}, Lexpo/modules/speech/SpeechModule;->speakOut(Ljava/lang/String;Ljava/lang/String;Lexpo/modules/speech/SpeechOptions;)V

    return-void
.end method

.method private final getTextToSpeech()Landroid/speech/tts/TextToSpeech;
    .locals 1

    .line 139
    iget-object v0, p0, Lexpo/modules/speech/SpeechModule;->textToSpeech$delegate:Lkotlin/Lazy;

    invoke-interface {v0}, Lkotlin/Lazy;->getValue()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/speech/tts/TextToSpeech;

    return-object v0
.end method

.method private final getVoices()Ljava/util/List;
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lexpo/modules/speech/VoiceRecord;",
            ">;"
        }
    .end annotation

    .line 81
    :try_start_0
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getTextToSpeech()Landroid/speech/tts/TextToSpeech;

    move-result-object v0

    invoke-virtual {v0}, Landroid/speech/tts/TextToSpeech;->getVoices()Ljava/util/Set;

    move-result-object v0

    const-string v1, "getVoices(...)"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Ljava/lang/Iterable;

    invoke-static {v0}, Lkotlin/collections/CollectionsKt;->toList(Ljava/lang/Iterable;)Ljava/util/List;

    move-result-object v0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    .line 86
    check-cast v0, Ljava/lang/Iterable;

    .line 404
    new-instance v1, Ljava/util/ArrayList;

    const/16 v2, 0xa

    invoke-static {v0, v2}, Lkotlin/collections/CollectionsKt;->collectionSizeOrDefault(Ljava/lang/Iterable;I)I

    move-result v2

    invoke-direct {v1, v2}, Ljava/util/ArrayList;-><init>(I)V

    check-cast v1, Ljava/util/Collection;

    .line 405
    invoke-interface {v0}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    .line 406
    check-cast v2, Landroid/speech/tts/Voice;

    .line 87
    invoke-virtual {v2}, Landroid/speech/tts/Voice;->getQuality()I

    move-result v3

    const/16 v4, 0x12c

    if-le v3, v4, :cond_0

    .line 88
    sget-object v3, Lexpo/modules/speech/VoiceQuality;->ENHANCED:Lexpo/modules/speech/VoiceQuality;

    goto :goto_1

    .line 90
    :cond_0
    sget-object v3, Lexpo/modules/speech/VoiceQuality;->DEFAULT:Lexpo/modules/speech/VoiceQuality;

    .line 93
    :goto_1
    new-instance v4, Lexpo/modules/speech/VoiceRecord;

    .line 94
    invoke-virtual {v2}, Landroid/speech/tts/Voice;->getName()Ljava/lang/String;

    move-result-object v5

    const-string v6, "getName(...)"

    invoke-static {v5, v6}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 95
    invoke-virtual {v2}, Landroid/speech/tts/Voice;->getName()Ljava/lang/String;

    move-result-object v7

    invoke-static {v7, v6}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 97
    sget-object v6, Lexpo/modules/speech/LanguageUtils;->INSTANCE:Lexpo/modules/speech/LanguageUtils;

    invoke-virtual {v2}, Landroid/speech/tts/Voice;->getLocale()Ljava/util/Locale;

    move-result-object v2

    const-string v8, "getLocale(...)"

    invoke-static {v2, v8}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    invoke-virtual {v6, v2}, Lexpo/modules/speech/LanguageUtils;->getISOCode(Ljava/util/Locale;)Ljava/lang/String;

    move-result-object v2

    .line 93
    invoke-direct {v4, v5, v7, v3, v2}, Lexpo/modules/speech/VoiceRecord;-><init>(Ljava/lang/String;Ljava/lang/String;Lexpo/modules/speech/VoiceQuality;Ljava/lang/String;)V

    .line 406
    invoke-interface {v1, v4}, Ljava/util/Collection;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 407
    :cond_1
    check-cast v1, Ljava/util/List;

    return-object v1

    :catch_0
    move-exception v0

    .line 83
    new-instance v1, Lexpo/modules/speech/SpeechUnableToGetVoicesException;

    check-cast v0, Ljava/lang/Throwable;

    invoke-direct {v1, v0}, Lexpo/modules/speech/SpeechUnableToGetVoicesException;-><init>(Ljava/lang/Throwable;)V

    throw v1
.end method

.method private final idToMap(Ljava/lang/String;)Landroid/os/Bundle;
    .locals 2

    .line 186
    new-instance v0, Landroid/os/Bundle;

    invoke-direct {v0}, Landroid/os/Bundle;-><init>()V

    .line 187
    const-string v1, "id"

    invoke-virtual {v0, v1, p1}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    return-object v0
.end method

.method private final isTextToSpeechReady()Z
    .locals 1

    .line 137
    iget-boolean v0, p0, Lexpo/modules/speech/SpeechModule;->_ttsReady:Z

    return v0
.end method

.method private final speakOut(Ljava/lang/String;Ljava/lang/String;Lexpo/modules/speech/SpeechOptions;)V
    .locals 4

    .line 103
    invoke-virtual {p3}, Lexpo/modules/speech/SpeechOptions;->getPitch()Ljava/lang/Float;

    move-result-object v0

    if-eqz v0, :cond_0

    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getTextToSpeech()Landroid/speech/tts/TextToSpeech;

    move-result-object v1

    check-cast v0, Ljava/lang/Number;

    invoke-virtual {v0}, Ljava/lang/Number;->floatValue()F

    move-result v0

    invoke-virtual {v1, v0}, Landroid/speech/tts/TextToSpeech;->setPitch(F)I

    .line 104
    :cond_0
    invoke-virtual {p3}, Lexpo/modules/speech/SpeechOptions;->getRate()Ljava/lang/Float;

    move-result-object v0

    if-eqz v0, :cond_1

    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getTextToSpeech()Landroid/speech/tts/TextToSpeech;

    move-result-object v1

    check-cast v0, Ljava/lang/Number;

    invoke-virtual {v0}, Ljava/lang/Number;->floatValue()F

    move-result v0

    invoke-virtual {v1, v0}, Landroid/speech/tts/TextToSpeech;->setSpeechRate(F)I

    .line 106
    :cond_1
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getTextToSpeech()Landroid/speech/tts/TextToSpeech;

    move-result-object v0

    invoke-virtual {p3}, Lexpo/modules/speech/SpeechOptions;->getLanguage()Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_3

    .line 107
    new-instance v2, Ljava/util/Locale;

    invoke-direct {v2, v1}, Ljava/util/Locale;-><init>(Ljava/lang/String;)V

    .line 108
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getTextToSpeech()Landroid/speech/tts/TextToSpeech;

    move-result-object v1

    invoke-virtual {v1, v2}, Landroid/speech/tts/TextToSpeech;->isLanguageAvailable(Ljava/util/Locale;)I

    move-result v1

    const/4 v3, -0x1

    if-eq v1, v3, :cond_2

    const/4 v3, -0x2

    if-eq v1, v3, :cond_2

    goto :goto_0

    .line 116
    :cond_2
    invoke-static {}, Ljava/util/Locale;->getDefault()Ljava/util/Locale;

    move-result-object v2

    :goto_0
    if-nez v2, :cond_4

    .line 118
    :cond_3
    invoke-static {}, Ljava/util/Locale;->getDefault()Ljava/util/Locale;

    move-result-object v2

    .line 106
    :cond_4
    invoke-virtual {v0, v2}, Landroid/speech/tts/TextToSpeech;->setLanguage(Ljava/util/Locale;)I

    .line 120
    invoke-virtual {p3}, Lexpo/modules/speech/SpeechOptions;->getVoice()Ljava/lang/String;

    move-result-object p3

    const/4 v0, 0x0

    if-eqz p3, :cond_7

    .line 121
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getTextToSpeech()Landroid/speech/tts/TextToSpeech;

    move-result-object v1

    invoke-virtual {v1}, Landroid/speech/tts/TextToSpeech;->getVoices()Ljava/util/Set;

    move-result-object v1

    const-string v2, "getVoices(...)"

    invoke-static {v1, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v1, Ljava/lang/Iterable;

    .line 409
    invoke-interface {v1}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :cond_5
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_6

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    move-object v3, v2

    check-cast v3, Landroid/speech/tts/Voice;

    .line 122
    invoke-virtual {v3}, Landroid/speech/tts/Voice;->getName()Ljava/lang/String;

    move-result-object v3

    invoke-static {v3, p3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_5

    goto :goto_1

    :cond_6
    move-object v2, v0

    :goto_1
    check-cast v2, Landroid/speech/tts/Voice;

    if-eqz v2, :cond_7

    .line 123
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getTextToSpeech()Landroid/speech/tts/TextToSpeech;

    move-result-object p3

    invoke-virtual {p3, v2}, Landroid/speech/tts/TextToSpeech;->setVoice(Landroid/speech/tts/Voice;)I

    .line 126
    :cond_7
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getTextToSpeech()Landroid/speech/tts/TextToSpeech;

    move-result-object p3

    .line 127
    check-cast p2, Ljava/lang/CharSequence;

    const/4 v1, 0x1

    .line 126
    invoke-virtual {p3, p2, v1, v0, p1}, Landroid/speech/tts/TextToSpeech;->speak(Ljava/lang/CharSequence;ILandroid/os/Bundle;Ljava/lang/String;)I

    return-void
.end method

.method private static final textToSpeech_delegate$lambda$15(Lexpo/modules/speech/SpeechModule;)Landroid/speech/tts/TextToSpeech;
    .locals 3

    .line 140
    new-instance v0, Landroid/speech/tts/TextToSpeech;

    invoke-virtual {p0}, Lexpo/modules/speech/SpeechModule;->getAppContext()Lexpo/modules/kotlin/AppContext;

    move-result-object v1

    invoke-virtual {v1}, Lexpo/modules/kotlin/AppContext;->getReactContext()Landroid/content/Context;

    move-result-object v1

    new-instance v2, Lexpo/modules/speech/SpeechModule$$ExternalSyntheticLambda1;

    invoke-direct {v2, p0}, Lexpo/modules/speech/SpeechModule$$ExternalSyntheticLambda1;-><init>(Lexpo/modules/speech/SpeechModule;)V

    invoke-direct {v0, v1, v2}, Landroid/speech/tts/TextToSpeech;-><init>(Landroid/content/Context;Landroid/speech/tts/TextToSpeech$OnInitListener;)V

    .line 181
    iput-object v0, p0, Lexpo/modules/speech/SpeechModule;->_textToSpeech:Landroid/speech/tts/TextToSpeech;

    return-object v0
.end method

.method private static final textToSpeech_delegate$lambda$15$lambda$14(Lexpo/modules/speech/SpeechModule;I)V
    .locals 3

    if-nez p1, :cond_2

    .line 143
    monitor-enter p0

    const/4 p1, 0x1

    .line 144
    :try_start_0
    iput-boolean p1, p0, Lexpo/modules/speech/SpeechModule;->_ttsReady:Z

    .line 145
    iget-object p1, p0, Lexpo/modules/speech/SpeechModule;->_textToSpeech:Landroid/speech/tts/TextToSpeech;

    invoke-static {p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;)V

    new-instance v0, Lexpo/modules/speech/SpeechModule$textToSpeech$2$newTtsInstance$1$1$1;

    invoke-direct {v0, p0}, Lexpo/modules/speech/SpeechModule$textToSpeech$2$newTtsInstance$1$1$1;-><init>(Lexpo/modules/speech/SpeechModule;)V

    check-cast v0, Landroid/speech/tts/UtteranceProgressListener;

    invoke-virtual {p1, v0}, Landroid/speech/tts/TextToSpeech;->setOnUtteranceProgressListener(Landroid/speech/tts/UtteranceProgressListener;)I

    .line 172
    iget-object p1, p0, Lexpo/modules/speech/SpeechModule;->delayedUtterances:Ljava/util/Queue;

    invoke-interface {p1}, Ljava/util/Queue;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lexpo/modules/speech/SpeechModule$Utterance;

    invoke-virtual {v0}, Lexpo/modules/speech/SpeechModule$Utterance;->component1()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0}, Lexpo/modules/speech/SpeechModule$Utterance;->component2()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0}, Lexpo/modules/speech/SpeechModule$Utterance;->component3()Lexpo/modules/speech/SpeechOptions;

    move-result-object v0

    .line 173
    invoke-direct {p0, v1, v2, v0}, Lexpo/modules/speech/SpeechModule;->speakOut(Ljava/lang/String;Ljava/lang/String;Lexpo/modules/speech/SpeechOptions;)V

    goto :goto_0

    .line 175
    :cond_0
    iget-object p1, p0, Lexpo/modules/speech/SpeechModule;->delayedGetVoices:Ljava/util/Queue;

    invoke-interface {p1}, Ljava/util/Queue;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_1
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lexpo/modules/kotlin/Promise;

    .line 176
    invoke-direct {p0}, Lexpo/modules/speech/SpeechModule;->getVoices()Ljava/util/List;

    move-result-object v1

    check-cast v1, Ljava/util/Collection;

    invoke-interface {v0, v1}, Lexpo/modules/kotlin/Promise;->resolve(Ljava/util/Collection;)V

    goto :goto_1

    .line 178
    :cond_1
    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 143
    monitor-exit p0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit p0

    throw p1

    :cond_2
    return-void
.end method


# virtual methods
.method public definition()Lexpo/modules/kotlin/modules/ModuleDefinitionData;
    .locals 13

    .line 24
    move-object v0, p0

    check-cast v0, Lexpo/modules/kotlin/modules/Module;

    .line 201
    invoke-virtual {v0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v1

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ".ModuleDefinition"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 203
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "[ExpoModulesCore] "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 204
    invoke-static {v1}, Landroidx/tracing/Trace;->beginSection(Ljava/lang/String;)V

    .line 201
    :try_start_0
    new-instance v1, Lexpo/modules/kotlin/modules/ModuleDefinitionBuilder;

    invoke-direct {v1, v0}, Lexpo/modules/kotlin/modules/ModuleDefinitionBuilder;-><init>(Lexpo/modules/kotlin/modules/Module;)V

    .line 25
    const-string v0, "ExpoSpeech"

    invoke-virtual {v1, v0}, Lexpo/modules/kotlin/modules/ModuleDefinitionBuilder;->Name(Ljava/lang/String;)V

    const/4 v0, 0x5

    .line 28
    new-array v0, v0, [Ljava/lang/String;

    const-string v2, "Exponent.speakingStarted"

    const/4 v3, 0x0

    aput-object v2, v0, v3

    .line 29
    const-string v2, "Exponent.speakingWillSayNextString"

    const/4 v4, 0x1

    aput-object v2, v0, v4

    .line 30
    const-string v2, "Exponent.speakingDone"

    const/4 v5, 0x2

    aput-object v2, v0, v5

    .line 31
    const-string v2, "Exponent.speakingStopped"

    const/4 v6, 0x3

    aput-object v2, v0, v6

    .line 32
    const-string v2, "Exponent.speakingError"

    const/4 v7, 0x4

    aput-object v2, v0, v7

    .line 27
    invoke-virtual {v1, v0}, Lexpo/modules/kotlin/modules/ModuleDefinitionBuilder;->Events([Ljava/lang/String;)V

    .line 35
    move-object v0, v1

    check-cast v0, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;

    const-string v2, "maxSpeechInputLength"

    .line 207
    new-instance v7, Lexpo/modules/kotlin/objects/ConstantComponentBuilder;

    invoke-direct {v7, v2}, Lexpo/modules/kotlin/objects/ConstantComponentBuilder;-><init>(Ljava/lang/String;)V

    .line 210
    new-instance v8, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$Constant$1;

    invoke-direct {v8}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$Constant$1;-><init>()V

    check-cast v8, Lkotlin/jvm/functions/Function0;

    invoke-virtual {v7, v8}, Lexpo/modules/kotlin/objects/ConstantComponentBuilder;->setGetter(Lkotlin/jvm/functions/Function0;)V

    .line 212
    invoke-virtual {v0}, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;->getConstants()Ljava/util/Map;

    move-result-object v0

    invoke-interface {v0, v2, v7}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 39
    move-object v0, v1

    check-cast v0, Lexpo/modules/kotlin/modules/InternalModuleDefinitionBuilder;

    .line 214
    invoke-virtual {v0}, Lexpo/modules/kotlin/modules/InternalModuleDefinitionBuilder;->getEventListeners()Ljava/util/Map;

    move-result-object v0

    sget-object v2, Lexpo/modules/kotlin/events/EventName;->ACTIVITY_DESTROYS:Lexpo/modules/kotlin/events/EventName;

    new-instance v7, Lexpo/modules/kotlin/events/BasicEventListener;

    sget-object v8, Lexpo/modules/kotlin/events/EventName;->ACTIVITY_DESTROYS:Lexpo/modules/kotlin/events/EventName;

    new-instance v9, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$OnActivityDestroys$1;

    invoke-direct {v9, p0}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$OnActivityDestroys$1;-><init>(Lexpo/modules/speech/SpeechModule;)V

    check-cast v9, Lkotlin/jvm/functions/Function0;

    invoke-direct {v7, v8, v9}, Lexpo/modules/kotlin/events/BasicEventListener;-><init>(Lexpo/modules/kotlin/events/EventName;Lkotlin/jvm/functions/Function0;)V

    invoke-interface {v0, v2, v7}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 43
    move-object v0, v1

    check-cast v0, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;

    const-string v2, "isSpeaking"

    .line 216
    new-array v7, v3, [Lexpo/modules/kotlin/types/AnyType;

    new-instance v8, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$1;

    invoke-direct {v8, p0}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$1;-><init>(Lexpo/modules/speech/SpeechModule;)V

    check-cast v8, Lkotlin/jvm/functions/Function1;

    .line 220
    const-class v9, Ljava/lang/Boolean;

    .line 221
    sget-object v10, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_0

    .line 224
    new-instance v9, Lexpo/modules/kotlin/functions/IntAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/IntAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_0

    .line 226
    :cond_0
    sget-object v10, Ljava/lang/Boolean;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_1

    .line 228
    new-instance v9, Lexpo/modules/kotlin/functions/BoolAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/BoolAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_0

    .line 230
    :cond_1
    sget-object v10, Ljava/lang/Double;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_2

    .line 232
    new-instance v9, Lexpo/modules/kotlin/functions/DoubleAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/DoubleAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_0

    .line 234
    :cond_2
    sget-object v10, Ljava/lang/Float;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_3

    .line 236
    new-instance v9, Lexpo/modules/kotlin/functions/FloatAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/FloatAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_0

    .line 238
    :cond_3
    const-class v10, Ljava/lang/String;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v9

    if-eqz v9, :cond_4

    .line 240
    new-instance v9, Lexpo/modules/kotlin/functions/StringAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/StringAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_0

    .line 242
    :cond_4
    new-instance v9, Lexpo/modules/kotlin/functions/UntypedAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/UntypedAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    .line 243
    :goto_0
    invoke-virtual {v0}, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;->getAsyncFunctions()Ljava/util/Map;

    move-result-object v0

    invoke-interface {v0, v2, v9}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 47
    move-object v0, v1

    check-cast v0, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;

    const-string v2, "getVoices"

    .line 245
    const-class v7, Lexpo/modules/kotlin/Promise;

    const-class v8, Lexpo/modules/kotlin/Promise;

    invoke-static {v7, v8}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v7

    if-eqz v7, :cond_5

    .line 246
    new-instance v7, Lexpo/modules/kotlin/functions/AsyncFunctionWithPromiseComponent;

    new-array v8, v3, [Lexpo/modules/kotlin/types/AnyType;

    .line 252
    new-instance v9, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$2;

    invoke-direct {v9, p0}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$2;-><init>(Lexpo/modules/speech/SpeechModule;)V

    check-cast v9, Lkotlin/jvm/functions/Function2;

    .line 246
    invoke-direct {v7, v2, v8, v9}, Lexpo/modules/kotlin/functions/AsyncFunctionWithPromiseComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function2;)V

    check-cast v7, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto/16 :goto_2

    .line 248
    :cond_5
    invoke-virtual {v0}, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;->getConverters()Lexpo/modules/kotlin/types/TypeConverterProvider;

    move-result-object v7

    .line 255
    const-class v8, Lexpo/modules/kotlin/Promise;

    .line 259
    new-array v8, v4, [Lexpo/modules/kotlin/types/AnyType;

    .line 260
    sget-object v9, Lexpo/modules/kotlin/types/AnyTypeProvider;->INSTANCE:Lexpo/modules/kotlin/types/AnyTypeProvider;

    .line 261
    new-instance v10, Lkotlin/Pair;

    const-class v11, Lexpo/modules/kotlin/Promise;

    invoke-static {v11}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v11

    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v12

    invoke-direct {v10, v11, v12}, Lkotlin/Pair;-><init>(Ljava/lang/Object;Ljava/lang/Object;)V

    .line 262
    invoke-virtual {v9}, Lexpo/modules/kotlin/types/AnyTypeProvider;->getTypesMap()Ljava/util/Map;

    move-result-object v9

    invoke-interface {v9, v10}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v9

    check-cast v9, Lexpo/modules/kotlin/types/AnyType;

    if-nez v9, :cond_6

    .line 260
    sget-object v9, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$3;->INSTANCE:Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$3;

    check-cast v9, Lkotlin/jvm/functions/Function0;

    .line 263
    new-instance v10, Lexpo/modules/kotlin/types/AnyType;

    .line 264
    new-instance v11, Lexpo/modules/kotlin/types/LazyKType;

    const-class v12, Lexpo/modules/kotlin/Promise;

    invoke-static {v12}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v12

    invoke-direct {v11, v12, v3, v9}, Lexpo/modules/kotlin/types/LazyKType;-><init>(Lkotlin/reflect/KClass;ZLkotlin/jvm/functions/Function0;)V

    check-cast v11, Lkotlin/reflect/KType;

    .line 263
    invoke-direct {v10, v11, v7}, Lexpo/modules/kotlin/types/AnyType;-><init>(Lkotlin/reflect/KType;Lexpo/modules/kotlin/types/TypeConverterProvider;)V

    move-object v9, v10

    .line 260
    :cond_6
    aput-object v9, v8, v3

    .line 248
    new-instance v7, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$4;

    invoke-direct {v7, p0}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$4;-><init>(Lexpo/modules/speech/SpeechModule;)V

    check-cast v7, Lkotlin/jvm/functions/Function1;

    .line 274
    const-class v9, Ljava/lang/Object;

    .line 275
    sget-object v10, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_7

    .line 278
    new-instance v9, Lexpo/modules/kotlin/functions/IntAsyncFunctionComponent;

    invoke-direct {v9, v2, v8, v7}, Lexpo/modules/kotlin/functions/IntAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    :goto_1
    move-object v7, v9

    goto :goto_2

    .line 280
    :cond_7
    sget-object v10, Ljava/lang/Boolean;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_8

    .line 282
    new-instance v9, Lexpo/modules/kotlin/functions/BoolAsyncFunctionComponent;

    invoke-direct {v9, v2, v8, v7}, Lexpo/modules/kotlin/functions/BoolAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_1

    .line 284
    :cond_8
    sget-object v10, Ljava/lang/Double;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_9

    .line 286
    new-instance v9, Lexpo/modules/kotlin/functions/DoubleAsyncFunctionComponent;

    invoke-direct {v9, v2, v8, v7}, Lexpo/modules/kotlin/functions/DoubleAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_1

    .line 288
    :cond_9
    sget-object v10, Ljava/lang/Float;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_a

    .line 290
    new-instance v9, Lexpo/modules/kotlin/functions/FloatAsyncFunctionComponent;

    invoke-direct {v9, v2, v8, v7}, Lexpo/modules/kotlin/functions/FloatAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_1

    .line 292
    :cond_a
    const-class v10, Ljava/lang/String;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v9

    if-eqz v9, :cond_b

    .line 294
    new-instance v9, Lexpo/modules/kotlin/functions/StringAsyncFunctionComponent;

    invoke-direct {v9, v2, v8, v7}, Lexpo/modules/kotlin/functions/StringAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_1

    .line 296
    :cond_b
    new-instance v9, Lexpo/modules/kotlin/functions/UntypedAsyncFunctionComponent;

    invoke-direct {v9, v2, v8, v7}, Lexpo/modules/kotlin/functions/UntypedAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_1

    .line 297
    :goto_2
    invoke-virtual {v0}, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;->getAsyncFunctions()Ljava/util/Map;

    move-result-object v0

    invoke-interface {v0, v2, v7}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 58
    move-object v0, v1

    check-cast v0, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;

    const-string v2, "stop"

    .line 299
    new-array v7, v3, [Lexpo/modules/kotlin/types/AnyType;

    new-instance v8, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$5;

    invoke-direct {v8, p0}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$5;-><init>(Lexpo/modules/speech/SpeechModule;)V

    check-cast v8, Lkotlin/jvm/functions/Function1;

    .line 303
    const-class v9, Lkotlin/Unit;

    .line 304
    sget-object v10, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_c

    .line 307
    new-instance v9, Lexpo/modules/kotlin/functions/IntAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/IntAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_3

    .line 309
    :cond_c
    sget-object v10, Ljava/lang/Boolean;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_d

    .line 311
    new-instance v9, Lexpo/modules/kotlin/functions/BoolAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/BoolAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_3

    .line 313
    :cond_d
    sget-object v10, Ljava/lang/Double;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_e

    .line 315
    new-instance v9, Lexpo/modules/kotlin/functions/DoubleAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/DoubleAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_3

    .line 317
    :cond_e
    sget-object v10, Ljava/lang/Float;->TYPE:Ljava/lang/Class;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v10

    if-eqz v10, :cond_f

    .line 319
    new-instance v9, Lexpo/modules/kotlin/functions/FloatAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/FloatAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_3

    .line 321
    :cond_f
    const-class v10, Ljava/lang/String;

    invoke-static {v9, v10}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v9

    if-eqz v9, :cond_10

    .line 323
    new-instance v9, Lexpo/modules/kotlin/functions/StringAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/StringAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_3

    .line 325
    :cond_10
    new-instance v9, Lexpo/modules/kotlin/functions/UntypedAsyncFunctionComponent;

    invoke-direct {v9, v2, v7, v8}, Lexpo/modules/kotlin/functions/UntypedAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v9, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    .line 326
    :goto_3
    invoke-virtual {v0}, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;->getAsyncFunctions()Ljava/util/Map;

    move-result-object v0

    invoke-interface {v0, v2, v9}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 62
    move-object v0, v1

    check-cast v0, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;

    const-string v2, "speak"

    .line 328
    invoke-virtual {v0}, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;->getConverters()Lexpo/modules/kotlin/types/TypeConverterProvider;

    move-result-object v7

    .line 331
    const-class v8, Ljava/lang/String;

    .line 332
    const-class v8, Ljava/lang/String;

    .line 333
    const-class v8, Lexpo/modules/speech/SpeechOptions;

    .line 337
    new-array v6, v6, [Lexpo/modules/kotlin/types/AnyType;

    .line 338
    sget-object v8, Lexpo/modules/kotlin/types/AnyTypeProvider;->INSTANCE:Lexpo/modules/kotlin/types/AnyTypeProvider;

    .line 339
    new-instance v9, Lkotlin/Pair;

    const-class v10, Ljava/lang/String;

    invoke-static {v10}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v10

    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v11

    invoke-direct {v9, v10, v11}, Lkotlin/Pair;-><init>(Ljava/lang/Object;Ljava/lang/Object;)V

    .line 340
    invoke-virtual {v8}, Lexpo/modules/kotlin/types/AnyTypeProvider;->getTypesMap()Ljava/util/Map;

    move-result-object v8

    invoke-interface {v8, v9}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v8

    check-cast v8, Lexpo/modules/kotlin/types/AnyType;

    if-nez v8, :cond_11

    .line 338
    sget-object v8, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$6;->INSTANCE:Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$6;

    check-cast v8, Lkotlin/jvm/functions/Function0;

    .line 341
    new-instance v9, Lexpo/modules/kotlin/types/AnyType;

    .line 342
    new-instance v10, Lexpo/modules/kotlin/types/LazyKType;

    const-class v11, Ljava/lang/String;

    invoke-static {v11}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v11

    invoke-direct {v10, v11, v3, v8}, Lexpo/modules/kotlin/types/LazyKType;-><init>(Lkotlin/reflect/KClass;ZLkotlin/jvm/functions/Function0;)V

    check-cast v10, Lkotlin/reflect/KType;

    .line 341
    invoke-direct {v9, v10, v7}, Lexpo/modules/kotlin/types/AnyType;-><init>(Lkotlin/reflect/KType;Lexpo/modules/kotlin/types/TypeConverterProvider;)V

    move-object v8, v9

    .line 338
    :cond_11
    aput-object v8, v6, v3

    .line 350
    sget-object v8, Lexpo/modules/kotlin/types/AnyTypeProvider;->INSTANCE:Lexpo/modules/kotlin/types/AnyTypeProvider;

    .line 351
    new-instance v9, Lkotlin/Pair;

    const-class v10, Ljava/lang/String;

    invoke-static {v10}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v10

    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v11

    invoke-direct {v9, v10, v11}, Lkotlin/Pair;-><init>(Ljava/lang/Object;Ljava/lang/Object;)V

    .line 352
    invoke-virtual {v8}, Lexpo/modules/kotlin/types/AnyTypeProvider;->getTypesMap()Ljava/util/Map;

    move-result-object v8

    invoke-interface {v8, v9}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v8

    check-cast v8, Lexpo/modules/kotlin/types/AnyType;

    if-nez v8, :cond_12

    .line 350
    sget-object v8, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$7;->INSTANCE:Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$7;

    check-cast v8, Lkotlin/jvm/functions/Function0;

    .line 353
    new-instance v9, Lexpo/modules/kotlin/types/AnyType;

    .line 354
    new-instance v10, Lexpo/modules/kotlin/types/LazyKType;

    const-class v11, Ljava/lang/String;

    invoke-static {v11}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v11

    invoke-direct {v10, v11, v3, v8}, Lexpo/modules/kotlin/types/LazyKType;-><init>(Lkotlin/reflect/KClass;ZLkotlin/jvm/functions/Function0;)V

    check-cast v10, Lkotlin/reflect/KType;

    .line 353
    invoke-direct {v9, v10, v7}, Lexpo/modules/kotlin/types/AnyType;-><init>(Lkotlin/reflect/KType;Lexpo/modules/kotlin/types/TypeConverterProvider;)V

    move-object v8, v9

    .line 350
    :cond_12
    aput-object v8, v6, v4

    .line 362
    sget-object v4, Lexpo/modules/kotlin/types/AnyTypeProvider;->INSTANCE:Lexpo/modules/kotlin/types/AnyTypeProvider;

    .line 363
    new-instance v8, Lkotlin/Pair;

    const-class v9, Lexpo/modules/speech/SpeechOptions;

    invoke-static {v9}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v9

    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v10

    invoke-direct {v8, v9, v10}, Lkotlin/Pair;-><init>(Ljava/lang/Object;Ljava/lang/Object;)V

    .line 364
    invoke-virtual {v4}, Lexpo/modules/kotlin/types/AnyTypeProvider;->getTypesMap()Ljava/util/Map;

    move-result-object v4

    invoke-interface {v4, v8}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Lexpo/modules/kotlin/types/AnyType;

    if-nez v4, :cond_13

    .line 362
    sget-object v4, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$8;->INSTANCE:Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$8;

    check-cast v4, Lkotlin/jvm/functions/Function0;

    .line 365
    new-instance v8, Lexpo/modules/kotlin/types/AnyType;

    .line 366
    new-instance v9, Lexpo/modules/kotlin/types/LazyKType;

    const-class v10, Lexpo/modules/speech/SpeechOptions;

    invoke-static {v10}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v10

    invoke-direct {v9, v10, v3, v4}, Lexpo/modules/kotlin/types/LazyKType;-><init>(Lkotlin/reflect/KClass;ZLkotlin/jvm/functions/Function0;)V

    check-cast v9, Lkotlin/reflect/KType;

    .line 365
    invoke-direct {v8, v9, v7}, Lexpo/modules/kotlin/types/AnyType;-><init>(Lkotlin/reflect/KType;Lexpo/modules/kotlin/types/TypeConverterProvider;)V

    move-object v4, v8

    .line 362
    :cond_13
    aput-object v4, v6, v5

    .line 328
    new-instance v3, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$9;

    invoke-direct {v3, p0}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$9;-><init>(Lexpo/modules/speech/SpeechModule;)V

    check-cast v3, Lkotlin/jvm/functions/Function1;

    .line 377
    const-class v4, Lkotlin/Unit;

    .line 378
    sget-object v5, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    invoke-static {v4, v5}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_14

    .line 381
    new-instance v4, Lexpo/modules/kotlin/functions/IntAsyncFunctionComponent;

    invoke-direct {v4, v2, v6, v3}, Lexpo/modules/kotlin/functions/IntAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v4, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_4

    .line 383
    :cond_14
    sget-object v5, Ljava/lang/Boolean;->TYPE:Ljava/lang/Class;

    invoke-static {v4, v5}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_15

    .line 385
    new-instance v4, Lexpo/modules/kotlin/functions/BoolAsyncFunctionComponent;

    invoke-direct {v4, v2, v6, v3}, Lexpo/modules/kotlin/functions/BoolAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v4, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_4

    .line 387
    :cond_15
    sget-object v5, Ljava/lang/Double;->TYPE:Ljava/lang/Class;

    invoke-static {v4, v5}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_16

    .line 389
    new-instance v4, Lexpo/modules/kotlin/functions/DoubleAsyncFunctionComponent;

    invoke-direct {v4, v2, v6, v3}, Lexpo/modules/kotlin/functions/DoubleAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v4, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_4

    .line 391
    :cond_16
    sget-object v5, Ljava/lang/Float;->TYPE:Ljava/lang/Class;

    invoke-static {v4, v5}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_17

    .line 393
    new-instance v4, Lexpo/modules/kotlin/functions/FloatAsyncFunctionComponent;

    invoke-direct {v4, v2, v6, v3}, Lexpo/modules/kotlin/functions/FloatAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v4, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_4

    .line 395
    :cond_17
    const-class v5, Ljava/lang/String;

    invoke-static {v4, v5}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v4

    if-eqz v4, :cond_18

    .line 397
    new-instance v4, Lexpo/modules/kotlin/functions/StringAsyncFunctionComponent;

    invoke-direct {v4, v2, v6, v3}, Lexpo/modules/kotlin/functions/StringAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v4, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    goto :goto_4

    .line 399
    :cond_18
    new-instance v4, Lexpo/modules/kotlin/functions/UntypedAsyncFunctionComponent;

    invoke-direct {v4, v2, v6, v3}, Lexpo/modules/kotlin/functions/UntypedAsyncFunctionComponent;-><init>(Ljava/lang/String;[Lexpo/modules/kotlin/types/AnyType;Lkotlin/jvm/functions/Function1;)V

    check-cast v4, Lexpo/modules/kotlin/functions/AsyncFunctionComponent;

    .line 401
    :goto_4
    invoke-virtual {v0}, Lexpo/modules/kotlin/objects/ObjectDefinitionBuilder;->getAsyncFunctions()Ljava/util/Map;

    move-result-object v0

    invoke-interface {v0, v2, v4}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 201
    invoke-virtual {v1}, Lexpo/modules/kotlin/modules/ModuleDefinitionBuilder;->buildModule()Lexpo/modules/kotlin/modules/ModuleDefinitionData;

    move-result-object v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 403
    invoke-static {}, Landroidx/tracing/Trace;->endSection()V

    return-object v0

    :catchall_0
    move-exception v0

    invoke-static {}, Landroidx/tracing/Trace;->endSection()V

    throw v0
.end method
