.class public final Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$9;
.super Ljava/lang/Object;
.source "ObjectDefinitionBuilder.kt"

# interfaces
.implements Lkotlin/jvm/functions/Function1;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lexpo/modules/speech/SpeechModule;->definition()Lexpo/modules/kotlin/modules/ModuleDefinitionData;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lkotlin/jvm/functions/Function1<",
        "[",
        "Ljava/lang/Object;",
        "Lkotlin/Unit;",
        ">;"
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nObjectDefinitionBuilder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ObjectDefinitionBuilder.kt\nexpo/modules/kotlin/objects/ObjectDefinitionBuilder$AsyncFunction$12\n+ 2 EnforceType.kt\nexpo/modules/kotlin/types/EnforceTypeKt\n+ 3 SpeechModule.kt\nexpo/modules/speech/SpeechModule\n*L\n1#1,613:1\n25#2:614\n63#3,14:615\n*S KotlinDebug\n*F\n+ 1 ObjectDefinitionBuilder.kt\nexpo/modules/kotlin/objects/ObjectDefinitionBuilder$AsyncFunction$12\n*L\n287#1:614\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    k = 0x3
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# instance fields
.field final synthetic this$0:Lexpo/modules/speech/SpeechModule;


# direct methods
.method public constructor <init>(Lexpo/modules/speech/SpeechModule;)V
    .locals 0

    iput-object p1, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$9;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public bridge synthetic invoke(Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 286
    check-cast p1, [Ljava/lang/Object;

    invoke-virtual {p0, p1}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$9;->invoke([Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public final invoke([Ljava/lang/Object;)Ljava/lang/Object;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "([",
            "Ljava/lang/Object;",
            ")",
            "Lkotlin/Unit;"
        }
    .end annotation

    const-string v0, "<destruct>"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v0, 0x0

    aget-object v0, p1, v0

    const/4 v1, 0x1

    aget-object v1, p1, v1

    const/4 v2, 0x2

    aget-object p1, p1, v2

    .line 288
    check-cast p1, Lexpo/modules/speech/SpeechOptions;

    check-cast v1, Ljava/lang/String;

    check-cast v0, Ljava/lang/String;

    .line 615
    invoke-virtual {v1}, Ljava/lang/String;->length()I

    move-result v2

    invoke-static {}, Landroid/speech/tts/TextToSpeech;->getMaxSpeechInputLength()I

    move-result v3

    if-gt v2, v3, :cond_1

    .line 619
    iget-object v2, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$9;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {v2}, Lexpo/modules/speech/SpeechModule;->access$isTextToSpeechReady(Lexpo/modules/speech/SpeechModule;)Z

    move-result v2

    if-eqz v2, :cond_0

    .line 620
    iget-object v2, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$9;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {v2, v0, v1, p1}, Lexpo/modules/speech/SpeechModule;->access$speakOut(Lexpo/modules/speech/SpeechModule;Ljava/lang/String;Ljava/lang/String;Lexpo/modules/speech/SpeechOptions;)V

    goto :goto_0

    .line 622
    :cond_0
    iget-object v2, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$9;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {v2}, Lexpo/modules/speech/SpeechModule;->access$getDelayedUtterances$p(Lexpo/modules/speech/SpeechModule;)Ljava/util/Queue;

    move-result-object v2

    new-instance v3, Lexpo/modules/speech/SpeechModule$Utterance;

    invoke-direct {v3, v0, v1, p1}, Lexpo/modules/speech/SpeechModule$Utterance;-><init>(Ljava/lang/String;Ljava/lang/String;Lexpo/modules/speech/SpeechOptions;)V

    invoke-interface {v2, v3}, Ljava/util/Queue;->add(Ljava/lang/Object;)Z

    .line 625
    iget-object p1, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$9;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {p1}, Lexpo/modules/speech/SpeechModule;->access$getTextToSpeech(Lexpo/modules/speech/SpeechModule;)Landroid/speech/tts/TextToSpeech;

    .line 628
    :goto_0
    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;

    return-object p1

    .line 616
    :cond_1
    new-instance p1, Lexpo/modules/speech/SpeechInputIsToLongException;

    invoke-direct {p1}, Lexpo/modules/speech/SpeechInputIsToLongException;-><init>()V

    throw p1
.end method
